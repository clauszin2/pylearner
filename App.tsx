
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonPanel from './components/LessonPanel';
import CodeEditor from './components/CodeEditor';
import OutputConsole from './components/OutputConsole';
import Header from './components/Header';
import { CURRICULUM } from './constants';
import { explainCode } from './services/geminiService';
import type { Lesson } from './types';

declare global {
  interface Window {
    loadPyodide: (options?: { indexURL: string }) => Promise<any>;
  }
}

const App: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentLessonIndexInChapter, setCurrentLessonIndexInChapter] = useState<number>(0);
  const [userCode, setUserCode] = useState<string>('');
  const [output, setOutput] = useState<string>("L'output del tuo codice apparirà qui.");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pyodide, setPyodide] = useState<any | null>(null);
  const [isPyodideLoading, setIsPyodideLoading] = useState<boolean>(true);

  const currentLesson: Lesson = CURRICULUM[currentChapterIndex].lessons[currentLessonIndexInChapter];

  useEffect(() => {
    async function loadPyodideInstance() {
      setOutput("Caricamento dell'interprete Python in locale (Pyodide)...");
      try {
        const pyodideInstance = await window.loadPyodide();
        setOutput('Caricamento pacchetti per Data Science (NumPy, Pandas)...');
        await pyodideInstance.loadPackage(['numpy', 'pandas', 'matplotlib']);
        setPyodide(pyodideInstance);
        setIsPyodideLoading(false);
        setOutput("Interprete Python pronto. Esegui il codice in locale!");
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
        setOutput("Errore durante il caricamento dell'interprete Python locale. L'esecuzione del codice non sarà disponibile.");
        setIsPyodideLoading(false);
      }
    }
    loadPyodideInstance();
  }, []);
  
  useEffect(() => {
    setUserCode(currentLesson.starterCode);
    if (!isPyodideLoading) {
      setOutput(`Benvenuto/a alla lezione: ${currentLesson.title}.\nScrivi il codice e premi 'Esegui Codice'.`);
    }
  }, [currentChapterIndex, currentLessonIndexInChapter, currentLesson, isPyodideLoading]);

  const handleRunCode = useCallback(async () => {
    if (isPyodideLoading || !pyodide) {
      setOutput("L'interprete Python locale non è ancora pronto.");
      return;
    }
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }

    setIsLoading(true);
    setOutput('Esecuzione in locale...');

    const outputLines: string[] = [];
    pyodide.setStdout({ batched: (str: string) => outputLines.push(str) });
    pyodide.setStderr({ batched: (str: string) => outputLines.push(str) });

    try {
      // Carica i namespace per pandas, numpy e matplotlib
      await pyodide.runPythonAsync(`
        import pandas as pd
        import numpy as np
        import matplotlib.pyplot as plt
      `);
      await pyodide.runPythonAsync(userCode);
      const result = outputLines.join('\n');
      setOutput(result || "Il codice è stato eseguito senza produrre output.");
    } catch (error: any) {
      setOutput(error.message);
    } finally {
      setIsLoading(false);
      // Resetta gli stream per non accumulare output tra le esecuzioni
      pyodide.setStdout({});
      pyodide.setStderr({});
    }
  }, [userCode, pyodide, isPyodideLoading]);

  const handleExplainCode = useCallback(async () => {
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }
    setIsLoading(true);
    setOutput('Spiegazione del codice in corso (via API)...');
    try {
      const explanation = await explainCode(userCode);
      setOutput(explanation);
    } catch (error) {
      console.error('Error explaining code:', error);
      setOutput('Si è verificato un errore durante la richiesta di spiegazione. Controlla la console per i dettagli.');
    } finally {
      setIsLoading(false);
    }
  }, [userCode]);

  const handleSelectLesson = useCallback((chapterIndex: number, lessonIndex: number) => {
    setCurrentChapterIndex(chapterIndex);
    setCurrentLessonIndexInChapter(lessonIndex);
  }, []);

  const handleNextLesson = useCallback(() => {
    const currentChapter = CURRICULUM[currentChapterIndex];
    const isLastLessonInChapter = currentLessonIndexInChapter === currentChapter.lessons.length - 1;
    const isLastChapter = currentChapterIndex === CURRICULUM.length - 1;

    if (!isLastLessonInChapter) {
      setCurrentLessonIndexInChapter(prev => prev + 1);
    } else if (!isLastChapter) {
      setCurrentChapterIndex(prev => prev + 1);
      setCurrentLessonIndexInChapter(0);
    }
  }, [currentChapterIndex, currentLessonIndexInChapter]);
  
  const isLastLesson = 
    currentChapterIndex === CURRICULUM.length - 1 &&
    currentLessonIndexInChapter === CURRICULUM[currentChapterIndex].lessons.length - 1;

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          curriculum={CURRICULUM}
          currentChapterIndex={currentChapterIndex}
          currentLessonIndexInChapter={currentLessonIndexInChapter}
          onSelectLesson={handleSelectLesson}
        />
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-auto">
          <div className="flex flex-col gap-4">
            <LessonPanel 
              lesson={currentLesson} 
              onNextLesson={handleNextLesson}
              isLastLesson={isLastLesson}
            />
          </div>
          <div className="flex flex-col gap-4 min-h-[400px] lg:min-h-0">
            <CodeEditor
              code={userCode}
              onCodeChange={setUserCode}
              onRunCode={handleRunCode}
              onExplainCode={handleExplainCode}
              isLoading={isLoading}
              isPyodideLoading={isPyodideLoading}
            />
            <OutputConsole output={output} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;