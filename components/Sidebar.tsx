import React, { useState, useEffect } from 'react';
import type { Chapter } from '../types';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { CloseIcon } from './icons/CloseIcon';

interface SidebarProps {
  curriculum: Chapter[];
  currentChapterIndex: number;
  currentLessonIndexInChapter: number;
  onSelectLesson: (chapterIndex: number, lessonIndex: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SidebarContent: React.FC<Omit<SidebarProps, 'isOpen' | 'onClose'>> = ({
  curriculum,
  currentChapterIndex,
  currentLessonIndexInChapter,
  onSelectLesson,
}) => {
  const [openChapterIndex, setOpenChapterIndex] = useState(currentChapterIndex);

  useEffect(() => {
    if (openChapterIndex !== currentChapterIndex) {
        setOpenChapterIndex(currentChapterIndex);
    }
  }, [currentChapterIndex]);

  const toggleChapter = (chapterIndex: number) => {
    setOpenChapterIndex(openChapterIndex === chapterIndex ? -1 : chapterIndex);
  };
  
  return (
    <nav className="space-y-2 flex-1 overflow-y-auto p-4">
      {curriculum.map((chapter, chapterIndex) => (
        <div key={chapter.title}>
          <button
            onClick={() => toggleChapter(chapterIndex)}
            className="w-full flex justify-between items-center text-left p-3 rounded-lg transition-colors duration-200 bg-slate-700/50 hover:bg-slate-700"
            aria-expanded={openChapterIndex === chapterIndex}
          >
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">{chapter.title}</h3>
            <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openChapterIndex === chapterIndex ? 'rotate-180' : ''}`} />
          </button>
          {openChapterIndex === chapterIndex && (
            <ul className="pl-3 mt-2 space-y-1 border-l-2 border-slate-600 ml-3">
              {chapter.lessons.map((lesson, lessonIndex) => (
                <li key={lesson.title}>
                  <button
                    onClick={() => onSelectLesson(chapterIndex, lessonIndex)}
                    className={`w-full text-left p-2.5 rounded-md transition-all duration-200 text-sm relative ${
                      currentChapterIndex === chapterIndex && currentLessonIndexInChapter === lessonIndex
                        ? 'bg-indigo-600 text-white font-semibold shadow-lg'
                        : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {currentChapterIndex === chapterIndex && currentLessonIndexInChapter === lessonIndex && (
                       <span className="absolute left-[-15px] top-0 bottom-0 w-1 bg-indigo-400 rounded-r-full"></span>
                    )}
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};


const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-30 transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'bg-black/60' : 'bg-transparent pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 flex flex-col z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-slate-200">Lezioni</h2>
          <button onClick={onClose} className="p-2 rounded-md text-slate-400 hover:bg-slate-700 hover:text-white" aria-label="Chiudi menu">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <SidebarContent {...props} />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-slate-800 flex-col hidden md:flex border-r border-slate-700">
        <div className="p-4 border-b border-slate-700">
           <h2 className="text-lg font-semibold text-slate-200">Lezioni</h2>
        </div>
        <SidebarContent {...props} />
      </aside>
    </>
  );
};

export default Sidebar;
