import React, { useState, useEffect } from 'react';
import type { Chapter } from '../types';

interface SidebarProps {
  curriculum: Chapter[];
  currentChapterIndex: number;
  currentLessonIndexInChapter: number;
  onSelectLesson: (chapterIndex: number, lessonIndex: number) => void;
}

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
);


const Sidebar: React.FC<SidebarProps> = ({ curriculum, currentChapterIndex, currentLessonIndexInChapter, onSelectLesson }) => {
  const [openChapterIndex, setOpenChapterIndex] = useState(currentChapterIndex);

  useEffect(() => {
    setOpenChapterIndex(currentChapterIndex);
  }, [currentChapterIndex]);

  const toggleChapter = (chapterIndex: number) => {
    setOpenChapterIndex(openChapterIndex === chapterIndex ? -1 : chapterIndex);
  };

  return (
    <aside className="w-64 bg-gray-800 p-4 flex-col hidden md:flex border-r border-gray-700 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Lezioni</h2>
      <nav className="space-y-2">
        {curriculum.map((chapter, chapterIndex) => (
          <div key={chapter.title}>
            <button
              onClick={() => toggleChapter(chapterIndex)}
              className="w-full flex justify-between items-center text-left p-3 rounded-lg transition-colors duration-200 bg-gray-700/50 hover:bg-gray-700"
              aria-expanded={openChapterIndex === chapterIndex}
            >
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">{chapter.title}</h3>
              <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openChapterIndex === chapterIndex ? 'rotate-180' : ''}`} />
            </button>
            {openChapterIndex === chapterIndex && (
              <ul className="pl-3 mt-2 space-y-1 border-l-2 border-gray-600 ml-3">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <li key={lesson.title}>
                    <button
                      onClick={() => onSelectLesson(chapterIndex, lessonIndex)}
                      className={`w-full text-left p-2.5 rounded-md transition-all duration-200 text-sm ${
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
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
