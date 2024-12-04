import { useContext } from 'react';
import { CourseContext } from '../contexts/course/courseContext';
import type { CourseContextData } from '../contexts/course/courseContext';

export const useCourse = (): CourseContextData => {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }

  return context;
};