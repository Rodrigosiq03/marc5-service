import User from "../../domain/entities/User";
import { Request, Response } from "express";
import { EntityError } from "../../helpers/errors/domain_errors";
import { MissingParameters } from "../../helpers/errors/controller_errors";
import { UserUsecase } from "../../application/usecases/user_usecase";
import { NoItemsFound, UserAlreadyExists, UserNotRegistered } from "../../helpers/errors/usecase_errors";

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
            if (!req.body['courses']) {
                req.body['courses'] = [];
            }

            const user = req.body as User;
            const newUser = await this.usecase.create(user);
            res.status(200).json(newUser);
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
            res.status(200).json(user);
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
            const requiredFields = ['id', 'name', 'email', 'password', 'course'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const user = req.body as User;
            const updatedUser = await this.usecase.update(user);
            res.status(200).json(updatedUser);
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
            res.status(200).json(deletedUser);
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
            const requiredFields = ['username', 'password'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const { username, password } = req.body;
            const token = await this.usecase.login(username, password);
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