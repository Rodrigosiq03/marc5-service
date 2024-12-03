import { Router } from "express";
import { LessonRepository } from "../infra/repositories/class/LessonRepository";
import { ILessonRepository } from "../domain/repositories/lesson_repository_interface";
import { LessonUsecase } from "../application/usecases/lesson_usecase";
import { LessonController } from "../application/controllers/lesson_controller";

export const lessonRouter = Router();
const repo: ILessonRepository = new LessonRepository();
const usecase = new LessonUsecase(repo);
const controller = new LessonController(usecase);

// GET /class
// query params: id
lessonRouter.get('/lesson', controller.getLesson);

// POST /class
// body: Class
lessonRouter.post('/lesson', controller.createLesson);

// PUT /class
// body: Class
lessonRouter.put('/lesson', controller.updateLesson);

// DELETE /class
// query params: id
lessonRouter.delete('/lesson', controller.deleteLesson);

// GET /course/classes
// query params: courseId
lessonRouter.get('/course/lessons', controller.getLessons);