import { Router } from "express";
import { ICourseRepository } from "../domain/repositories/course_repository_interface";
import { ILessonRepository } from "../domain/repositories/lesson_repository_interface";
import { IUserRepository } from "../domain/repositories/user_repository_interface";
import { CourseUsecase } from "../application/usecases/course_usecase";
import { CourseController } from "../application/controllers/course_controller";
import { UserRepository } from "../infra/repositories/user/UserRepository";
import { LessonRepository } from "../infra/repositories/lesson/LessonRepository";
import { CourseRepository } from "../infra/repositories/course/CourseRepository";

export const courseRouter = Router();
const repo: ICourseRepository = new CourseRepository();
const lessonRepo: ILessonRepository = new LessonRepository();
const userRepo: IUserRepository = new UserRepository();
const usecase = new CourseUsecase(repo, lessonRepo, userRepo);
const controller = new CourseController(usecase);

// GET /course
// query params: id
courseRouter.get('/course', controller.getCourse);

// POST /course
// body: Course
courseRouter.post('/course', controller.createCourse);

// PUT /course
// body: Course
courseRouter.put('/course', controller.updateCourse);

// DELETE /course
// query params: id
courseRouter.delete('/course', controller.deleteCourse);

// GET /courses
courseRouter.get('/courses', controller.getAllCourses);

// POST /course/subscribe
// body: { courseId, userId }
courseRouter.post('/course/subscribe', controller.subscribe);

// POST /course/unsubscribe
// body: { courseId, userId }
courseRouter.post('/course/unsubscribe', controller.unsubscribe);

// GET /user/courses
// query params: userId
courseRouter.get('/user/courses', controller.getSubscribedCourses);