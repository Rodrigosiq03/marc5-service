import { Router } from "express";
import { IUserRepository } from "../domain/repositories/user_repository_interface";
import { UserRepository } from "../infra/repositories/user/UserRepository";
import { UserController } from "../application/controllers/user_controller";
import { UserUsecase } from "../application/usecases/user_usecase";

export const userRouter = Router();
const repo: IUserRepository = new UserRepository();
const usecase = new UserUsecase(repo);
const controller = new UserController(usecase);
// GET /user
// query params: id
userRouter.get('/user', controller.getUser);

// GET /user/email
// query params: email
userRouter.get('/user/email', async (req, res) => {
    const email = req.query.email as string;
    console.log(email); 
    const response = await repo.getByEmail(email);
    console.log(response);
    res.status(200).json(response);
});
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
