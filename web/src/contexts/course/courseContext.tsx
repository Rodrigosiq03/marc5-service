import React, { createContext, useState, useCallback } from 'react';
import { Course } from '../../api/services/course/types';
import courseService from '../../api/services/course/service';

export interface CourseContextData {
  courses: Course[];
  userCourses: Course[];
  loading: boolean;
  hasLoadedCourses: boolean;
  fetchCourses: () => Promise<void>;
  refreshUserCourses: (userId: string) => Promise<void>;
  subscribeToCourse: (courseId: string, userId: string) => Promise<void>;
  unsubscribeFromCourse: (courseId: string, userId: string) => Promise<void>;
}

export const CourseContext = createContext<CourseContextData>({} as CourseContextData);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadedCourses, setHasLoadedCourses] = useState(false);

  const fetchCourses = useCallback(async () => {
    if (loading || hasLoadedCourses) return;
    
    try {
      setLoading(true);
      const allCourses = await courseService.getAllCourses();
      setCourses(allCourses);
      setHasLoadedCourses(true);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setHasLoadedCourses(false);
    } finally {
      setLoading(false);
    }
  }, [loading, hasLoadedCourses]);

  const refreshUserCourses = useCallback(async (userId: string) => {
    if (loading) return;

    try {
      setLoading(true);
      const newUserCourses = await courseService.getUserCourses(userId);
      setUserCourses(newUserCourses);
    } catch (error) {
      console.error('Error fetching user courses:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const subscribeToCourse = useCallback(async (courseId: string, userId: string) => {
    try {
      await courseService.subscribeToCourse(courseId, userId);
      const [allCourses, newUserCourses] = await Promise.all([
        courseService.getAllCourses(),
        courseService.getUserCourses(userId)
      ]);
      setCourses(allCourses);
      setUserCourses(newUserCourses);
    } catch (error) {
      console.error('Error subscribing to course:', error);
    }
  }, []);

  const unsubscribeFromCourse = useCallback(async (courseId: string, userId: string) => {
    try {
      await courseService.unsubscribeFromCourse(courseId, userId);
      const [allCourses, newUserCourses] = await Promise.all([
        courseService.getAllCourses(),
        courseService.getUserCourses(userId)
      ]);
      setCourses(allCourses);
      setUserCourses(newUserCourses);
    } catch (error) {
      console.error('Error unsubscribing from course:', error);
    }
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        userCourses,
        loading,
        hasLoadedCourses,
        fetchCourses,
        refreshUserCourses,
        subscribeToCourse,
        unsubscribeFromCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};