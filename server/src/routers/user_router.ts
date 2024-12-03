import { Router } from "express";
import { IUserRepository } from "../domain/repositories/user_repository_interface";
import { UserRepository } from "../repositories/UserRepository";
import { UserController } from "../application/controllers/user_controller";
import { UserUsecase } from "../application/usecases/user_usecase";

export const userRouter = Router();
const repo: IUserRepository = new UserRepository();
const usecase = new UserUsecase(repo);
const controller = new UserController(usecase);
// GET /user
// query params: id
userRouter.get('/user', controller.getUser);

// POST /user
// body: User
userRouter.post('/user', controller.createUser);

// PUT /user
// body: User
userRouter.put('/user', controller.updateUser);

// DELETE /user
// query params: id
userRouter.delete('/user', controller.deleteUser);

// POST /user/login
// body: { username: string, password: string }
userRouter.post('/user/login', controller.login);
