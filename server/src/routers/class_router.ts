import { Router } from "express";
import { ClassRepository } from "../infra/repositories/class/ClassRepository";
import { IClassRepository } from "../domain/repositories/class_repository_interface";
import { ClassUsecase } from "../application/usecases/class_usecase";
import { ClassController } from "../application/controllers/class_controller";

export const classRouter = Router();
const repo: IClassRepository = new ClassRepository();
const usecase = new ClassUsecase(repo);
const controller = new ClassController(usecase);

// GET /class
// query params: id
classRouter.get('/class', controller.getClass);

// POST /class
// body: Class
classRouter.post('/class', controller.createClass);

// PUT /class
// body: Class
classRouter.put('/class', controller.updateClass);

// DELETE /class
// query params: id
classRouter.delete('/class', controller.deleteClass);

// GET /course/classes
// query params: courseId
classRouter.get('/course/classes', controller.getClasses);