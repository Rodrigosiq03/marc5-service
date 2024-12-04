import Course from "../entities/Course";

export interface ICourseRepository {
    create(course: Course): Promise<Course>;
    get(id: string): Promise<Course | null>;
    getAll(): Promise<Course[]>;
    update(course: Course): Promise<Course>;
    delete(id: string): Promise<Course | null>;
    subscribe(courseId: string, userId: string): Promise<Course | null>;
    unsubscribe(courseId: string, userId: string): Promise<Course | null>;
    getSubscribedCourses(userId: string): Promise<Course[]>;
}