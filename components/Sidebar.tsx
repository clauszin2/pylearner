import React from 'react';
import type { Chapter } from '../types';

interface SidebarProps {
  curriculum: Chapter[];
  currentChapterIndex: number;
  currentLessonIndexInChapter: number;
  onSelectLesson: (chapterIndex: number, lessonIndex: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ curriculum, currentChapterIndex, currentLessonIndexInChapter, onSelectLesson }) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex-col hidden md:flex border-r border-gray-700 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Lezioni</h2>
      <nav>
        {curriculum.map((chapter, chapterIndex) => (
          <div key={chapter.title} className="mb-6">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-3 mb-2">{chapter.title}</h3>
            <ul>
              {chapter.lessons.map((lesson, lessonIndex) => (
                <li key={lesson.title} className="mb-1">
                  <button
                    onClick={() => onSelectLesson(chapterIndex, lessonIndex)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 text-sm ${
                      currentChapterIndex === chapterIndex && currentLessonIndexInChapter === lessonIndex
                        ? 'bg-blue-600 text-white font-semibold shadow-lg'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
