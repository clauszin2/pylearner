import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonPanel from './components/LessonPanel';
import CodeEditor from './components/CodeEditor';
import OutputConsole from './components/OutputConsole';
import Header from './components/Header';
import { CURRICULUM } from './constants';
import { runPythonCode, explainCode } from './services/geminiService';
import type { Lesson } from './types';

const App: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentLessonIndexInChapter, setCurrentLessonIndexInChapter] = useState<number>(0);
  const [userCode, setUserCode] = useState<string>('');
  const [output, setOutput] = useState<string>("L'output del tuo codice apparirà qui.");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentLesson: Lesson = CURRICULUM[currentChapterIndex].lessons[currentLessonIndexInChapter];

  useEffect(() => {
    setUserCode(currentLesson.starterCode);
    setOutput(`Benvenuto/a alla lezione: ${currentLesson.title}.\nScrivi il codice e premi 'Esegui Codice'.`);
  }, [currentChapterIndex, currentLessonIndexInChapter, currentLesson]);

  const handleRunCode = useCallback(async () => {
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }
    setIsLoading(true);
    setOutput('Esecuzione del codice...');
    try {
      const result = await runPythonCode(userCode);
      setOutput(result);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Si è verificato un errore durante l\'esecuzione del codice. Controlla la console per i dettagli.');
    } finally {
      setIsLoading(false);
    }
  }, [userCode]);

  const handleExplainCode = useCallback(async () => {
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }
    setIsLoading(true);
    setOutput('Spiegazione del codice in corso...');
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
            />
            <OutputConsole output={output} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
