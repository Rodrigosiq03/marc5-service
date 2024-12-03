import { Router } from "express";
import { LessonRepository } from "../infra/repositories/lesson/LessonRepository";
import { ILessonRepository } from "../domain/repositories/lesson_repository_interface";
import { LessonUsecase } from "../application/usecases/lesson_usecase";
import { LessonController } from "../application/controllers/lesson_controller";

export const lessonRouter = Router();
const repo: ILessonRepository = new LessonRepository();
const usecase = new LessonUsecase(repo);
const controller = new LessonController(usecase);

// GET /lesson
// query params: id
lessonRouter.get('/lesson', controller.getLesson);

// POST /lesson
// body: Lesson
lessonRouter.post('/lesson', controller.createLesson);

// PUT /lesson
// body: Lesson
lessonRouter.put('/lesson', controller.updateLesson);

// DELETE /lesson
// query params: id
lessonRouter.delete('/lesson', controller.deleteLesson);

// GET /course/lessons
// query params: courseId
lessonRouter.get('/course/lessons', controller.getLessons);