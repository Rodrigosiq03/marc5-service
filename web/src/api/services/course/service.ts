import axios from "../../axios";
import { Course, SubscriptionRequest } from "./types";

const courseService = {
  getCourse: async (courseId: string): Promise<Course> => {
    const response = await axios.get<Course>(`/course?id=${courseId}`);
    return response.data;
  },

  getAllCourses: async (): Promise<Course[]> => {
    const response = await axios.get<Course[]>('/courses');
    return response.data;
  },

  createCourse: async (course: Course): Promise<Course> => {
    const response = await axios.post<Course>('/course', course);
    return response.data;
  },

  updateCourse: async (course: Course): Promise<Course> => {
    const response = await axios.put<Course>('/course', course);
    return response.data;
  },

  deleteCourse: async (courseId: string): Promise<Course> => {
    const response = await axios.delete<Course>(`/course?id=${courseId}`);
    return response.data;
  },

  subscribeToCourse: async (courseId: string, userId: string): Promise<Course> => {
    const subscriptionData: SubscriptionRequest = { courseId, userId };
    const response = await axios.post<Course>('/course/subscribe', subscriptionData);
    return response.data;
  },
  
  unsubscribeFromCourse: async (courseId: string, userId: string): Promise<Course> => {
    const subscriptionData: SubscriptionRequest = { courseId, userId };
    const response = await axios.post<Course>('/course/unsubscribe', subscriptionData);
    return response.data;
  },

  getUserCourses: async (userId: string): Promise<Course[]> => {
    const response = await axios.get<Course[]>(`/user/courses?userId=${userId}`);
    return response.data;
  }
};

export default courseService;