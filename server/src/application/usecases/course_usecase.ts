import Course from "../../domain/entities/Course";
import { ICourseRepository } from "../../domain/repositories/course_repository_interface";
import { v4 as uuidv4 } from 'uuid';
import { ILessonRepository } from "../../domain/repositories/lesson_repository_interface";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";
import Lesson from "../../domain/entities/Lesson";
import { IUserRepository } from "../../domain/repositories/user_repository_interface";

export class CourseUsecase {
    constructor(private readonly courseRepo: ICourseRepository, private readonly lessonRepo: ILessonRepository, private userRepo: IUserRepository) {}

    async create(course: Course) : Promise<Course> {
        course.courseId = uuidv4();
        return this.courseRepo.create(course);
    }

    async get(courseId: string) : Promise<[Course, Lesson[]]> {
        const course = await this.courseRepo.get(courseId);
        if (!course) {
            throw new NoItemsFound('course');
        }
        const lessons = await this.lessonRepo.getLessons(courseId);
        return [course, lessons];
    }

    async getAll() : Promise<Course[]> {
        const courses = await this.courseRepo.getAll();
        for (const course of courses) {
            const creator = await this.userRepo.get(course.createdBy);
            if (creator) {
                course.createdBy = creator.name;
            }
        }
        return courses;
    }

    async update(course: Course) : Promise<Course> {
        const courseExists = await this.courseRepo.get(course.courseId!);
        if (!courseExists) {
            throw new NoItemsFound('course');
        }
        return this.courseRepo.update(course);
    }

    async delete(courseId: string) : Promise<Course> {
        const deletedCourse = await this.courseRepo.delete(courseId);
        if (!deletedCourse) {
            throw new NoItemsFound('course');
        }
        return deletedCourse;
    }

    async subscribe(courseId: string, userId: string) : Promise<Course> {
        const user = await this.userRepo.get(userId);
        if (!user) {
            throw new NoItemsFound('user');
        }
        const course = await this.courseRepo.subscribe(courseId, userId);
        if (!course) {
            throw new NoItemsFound('course');
        }
        return course;
    }

    async unsubscribe(courseId: string, userId: string) : Promise<Course> {
        const user = await this.userRepo.get(userId);
        if (!user) {
            throw new NoItemsFound('user');
        }
        const course = await this.courseRepo.unsubscribe(courseId, userId);
        if (!course) {
            throw new NoItemsFound('course');
        }
        return course;
    }

    async getSubscribedCourses(userId: string) : Promise<Course[]> {
        const user = await this.userRepo.get(userId);
        if (!user) {
            throw new NoItemsFound('user');
        }
        return this.courseRepo.getSubscribedCourses(userId);
    }
}