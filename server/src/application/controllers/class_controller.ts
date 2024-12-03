import { MissingParameters } from "../../helpers/errors/controller_errors";
import { EntityError } from "../../helpers/errors/domain_errors";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";
import { ClassUsecase } from "../usecases/class_usecase";
import { Request, Response } from "express";

export class ClassController {
    constructor(private usecase: ClassUsecase) { }

    createClass = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new MissingParameters(req.body);
            }
            const requiredFields = ['courseId', 'title', 'description', 'videoUrl', 'section'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const classEntity = req.body;
            const newClass = await this.usecase.create(classEntity);
            res.status(200).json(newClass);
        } catch (error: any) {
            if (error instanceof NoItemsFound || error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    getClass = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const classEntity = await this.usecase.get(id);
            res.status(200).json(classEntity);
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

    getClasses = async (req: Request, res: Response) => {
        try {
            if (!req.query.courseId) {
                throw new MissingParameters('courseId');
            }

            const courseId = req.query.courseId as string;
            // if (!courseRepository.get(courseId)) {
            //     throw new NoItemsFound('course');
            // }
            const classes = await this.usecase.getClasses(courseId);
            res.status(200).json(classes);
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

    updateClass = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new MissingParameters(req.body);
            }
            const requiredFields = ['classId', 'courseId', 'title', 'description', 'videoUrl', 'section'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const classEntity = req.body;
            const updatedClass = await this.usecase.update(classEntity);
            res.status(200).json(updatedClass);
        } catch (error: any) {
            if (error instanceof NoItemsFound || error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    deleteClass = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const deletedClass = await this.usecase.delete(id);
            res.status(200).json(deletedClass);
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
}