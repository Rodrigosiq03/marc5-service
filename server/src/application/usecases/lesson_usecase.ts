import Lesson from "../../domain/entities/Lesson";
import { ILessonRepository } from "../../domain/repositories/lesson_repository_interface";
import { v4 as uuidv4 } from 'uuid';
import { NoItemsFound } from "../../helpers/errors/usecase_errors";

export class LessonUsecase {
    private lessonRepository: ILessonRepository

    constructor(lessonRepository: ILessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    async create(lesson: Lesson): Promise<Lesson> {
        lesson.lessonId = uuidv4();
        return this.lessonRepository.createLesson(lesson);
    }

    async get(lessonId: string): Promise<Lesson> {
        const lesson = await this.lessonRepository.getLesson(lessonId);
        if (!lesson) {
            throw new NoItemsFound('lesson');
        }
        return lesson;
    }

    async getLessons(courseId: string): Promise<Lesson[]> {
        return this.lessonRepository.getLessons(courseId);
    }

    async update(lesson: Lesson): Promise<Lesson> {
        const lessonExists = await this.lessonRepository.getLesson(lesson.lessonId!);
        if (!lessonExists) {
            throw new NoItemsFound('lesson');
        }
        return this.lessonRepository.updateLesson(lesson);
    }

    async delete(lessonId: string): Promise<Lesson> {
        const deletedLesson = await this.lessonRepository.deleteLesson(lessonId);
        if (!deletedLesson) {
            throw new NoItemsFound('lesson');
        }
        return deletedLesson;
    }
}