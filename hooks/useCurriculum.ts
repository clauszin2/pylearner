
import { useState, useCallback, useMemo } from 'react';
import { CURRICULUM } from '../constants';
import type { Lesson } from '../types';

export function useCurriculum() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentLessonIndexInChapter, setCurrentLessonIndexInChapter] = useState(0);

  const currentLesson: Lesson = useMemo(
    () => CURRICULUM[currentChapterIndex].lessons[currentLessonIndexInChapter],
    [currentChapterIndex, currentLessonIndexInChapter]
  );

  const isLastLesson = useMemo(
    () =>
      currentChapterIndex === CURRICULUM.length - 1 &&
      currentLessonIndexInChapter === CURRICULUM[currentChapterIndex].lessons.length - 1,
    [currentChapterIndex, currentLessonIndexInChapter]
  );

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

  return {
    currentLesson,
    currentChapterIndex,
    currentLessonIndexInChapter,
    isLastLesson,
    handleSelectLesson,
    handleNextLesson,
  };
}
