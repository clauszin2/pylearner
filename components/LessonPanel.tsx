
import React from 'react';
import type { Lesson } from '../types';

interface LessonPanelProps {
  lesson: Lesson;
  onNextLesson: () => void;
  isLastLesson: boolean;
}

const LessonPanel: React.FC<LessonPanelProps> = ({ lesson, onNextLesson, isLastLesson }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 flex flex-col h-full border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{lesson.title}</h2>
      <div className="prose prose-invert max-w-none text-gray-300 flex-1 overflow-y-auto">
        {lesson.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      {!isLastLesson && (
        <div className="mt-6">
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
