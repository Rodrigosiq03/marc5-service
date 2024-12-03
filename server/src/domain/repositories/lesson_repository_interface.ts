import Lesson from "../entities/Lesson";

export interface ILessonRepository {
    createLesson(lesson: Lesson): Promise<Lesson>;
    getLesson(lessonId: string): Promise<Lesson | null>;
    getLessons(courseId: string): Promise<Lesson[]>;
    updateLesson(lesson: Lesson): Promise<Lesson>;
    deleteLesson(lessonId: string): Promise<Lesson | null>;
}