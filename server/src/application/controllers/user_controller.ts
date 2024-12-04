import User from "../../domain/entities/User";
import { Request, Response } from "express";
import { EntityError } from "../../helpers/errors/domain_errors";
import { MissingParameters } from "../../helpers/errors/controller_errors";
import { UserUsecase } from "../../application/usecases/user_usecase";
import { NoItemsFound, UserAlreadyExists, UserNotRegistered } from "../../helpers/errors/usecase_errors";
import { UserViewModel } from "../viewmodels/user_viewmodel";

export class UserController {
    constructor(
        private readonly usecase: UserUsecase
    ) { }

    createUser = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('User data is required');
            }
            const requiredFields = ['name', 'email', 'password'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }
            
            !req.body['courses'] ? req.body['courses'] = [] : req.body['courses'];

            !req.body['pictureUrl'] ? req.body['pictureUrl'] = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' : req.body['pictureUrl'];

            !req.body['xp'] ? req.body['xp'] = 0 : req.body['xp'];

            const user = req.body as User;
            const newUser = await this.usecase.create(user);
            const response = UserViewModel.fromEntity(newUser).toModel();
            res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof UserAlreadyExists || error instanceof EntityError) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    getUser = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const user = await this.usecase.get(id);
            const response = UserViewModel.fromEntity(user).toModel();
            res.status(200).json(response);
        } catch (error: any) {
            console.log(error);
            if (error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof NoItemsFound) {
                res.status(404).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    getUserByEmail = async (req: Request, res: Response) => {
        try {
            if (!req.query.email) {
                throw new MissingParameters('email');
            }

            const email = req.query.email as string;
            const user = await this.usecase.getByEmail(email);
            const response = UserViewModel.fromEntity(user).toModel();
            res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof NoItemsFound) {
                res.status(404).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    updateUser = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('User data is required');
            }
            const requiredFields = ['userId', 'name', 'email', 'password', 'courses', 'pictureUrl'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const user = req.body as User;
            const updatedUser = await this.usecase.update(user);
            const response = UserViewModel.fromEntity(updatedUser).toModel();
            res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof NoItemsFound) {
                res.status(404).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const deletedUser = await this.usecase.delete(id);
            const response = UserViewModel.fromEntity(deletedUser).toModel();
            res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof NoItemsFound) {
                res.status(404).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('Username and password are required');
            }
            const requiredFields = ['email', 'password'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const { email, password } = req.body;
            const token = await this.usecase.login(email, password);
            res.status(200).json(token);
        } catch (error: any) {
            if (error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof UserNotRegistered) {
                res.status(404).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            }
        }
    }
}