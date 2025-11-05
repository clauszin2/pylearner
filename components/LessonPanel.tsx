
import React, { useState, useEffect } from 'react';
import type { Lesson } from '../types';

interface LessonPanelProps {
  lesson: Lesson;
  onNextLesson: () => void;
  isLastLesson: boolean;
}

const LessonPanel: React.FC<LessonPanelProps> = ({ lesson, onNextLesson, isLastLesson }) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);

  // Resetta la visibilità della soluzione quando la lezione cambia
  useEffect(() => {
    setIsSolutionVisible(false);
  }, [lesson]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 flex flex-col h-full border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{lesson.title}</h2>
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="prose prose-invert max-w-none text-gray-300">
          {lesson.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Sezione Esercizio */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">Esercizio Pratico</h3>
          <p className="text-gray-300 mb-4">{lesson.exercisePrompt}</p>
          <button
            onClick={() => setIsSolutionVisible(!isSolutionVisible)}
            className="text-sm bg-gray-700 text-yellow-300 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {isSolutionVisible ? 'Nascondi Soluzione' : 'Mostra Soluzione'}
          </button>
          {isSolutionVisible && (
            <div className="mt-4 p-4 bg-[#1e1e1e] rounded-lg border border-gray-700">
              <pre className="w-full text-gray-200 font-mono text-sm whitespace-pre-wrap break-words">
                <code>{lesson.solution}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {!isLastLesson && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <button
            onClick={onNextLesson}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Lezione Successiva &rarr;
          </button>
        </div>
      )}
       {isLastLesson && (
        <div className="mt-6 text-center p-4 bg-gray-700 rounded-lg">
          <p className="font-semibold text-green-400">Congratulazioni! Hai completato tutte le lezioni.</p>
        </div>
      )}
    </div>
  );
};

export default LessonPanel;