
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonPanel from './components/LessonPanel';
import CodeEditor from './components/CodeEditor';
import OutputConsole from './components/OutputConsole';
import Header from './components/Header';
import { CURRICULUM } from './constants';
import { useCurriculum } from './hooks/useCurriculum';
import { usePyodide } from './hooks/usePyodide';
import { explainCode } from './services/geminiService';

const App: React.FC = () => {
  const [userCode, setUserCode] = useState<string>('');
  const [output, setOutput] = useState<string>("L'output del tuo codice apparirà qui.");
  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);

  const {
    currentLesson,
    currentChapterIndex,
    currentLessonIndexInChapter,
    isLastLesson,
    handleSelectLesson,
    handleNextLesson,
  } = useCurriculum();

  // I setter di stato di useState sono stabili, non serve useCallback
  const { isPyodideLoading, runPython } = usePyodide(setOutput);

  useEffect(() => {
    setUserCode(currentLesson.starterCode);
    // Questo effetto si attiva al cambio di lezione. Se Pyodide sta ancora caricando,
    // il messaggio di caricamento rimarrà. Una volta pronto, imposterà il
    // messaggio di benvenuto per la lezione corrente.
    if (!isPyodideLoading) {
      setOutput(`Benvenuto/a alla lezione: ${currentLesson.title}.\nScrivi il codice e premi 'Esegui Codice'.`);
    }
  }, [currentLesson, isPyodideLoading]);

  const handleRunCode = useCallback(async () => {
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }

    setIsApiLoading(true);
    setOutput('Esecuzione in locale...');
    const result = await runPython(userCode);
    setOutput(result);
    setIsApiLoading(false);
  }, [userCode, runPython]);

  const handleExplainCode = useCallback(async () => {
    if (!userCode.trim()) {
      setOutput("Errore: L'editor di codice è vuoto.");
      return;
    }
    setIsApiLoading(true);
    setOutput('Spiegazione del codice in corso (via API)...');
    try {
      const explanation = await explainCode(userCode);
      setOutput(explanation);
    } catch (error) {
      console.error('Error explaining code:', error);
      setOutput("Si è verificato un errore durante la richiesta di spiegazione.");
    } finally {
      setIsApiLoading(false);
    }
  }, [userCode]);

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
              isLoading={isApiLoading}
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
