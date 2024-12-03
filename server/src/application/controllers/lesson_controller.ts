import { MissingParameters } from "../../helpers/errors/controller_errors";
import { EntityError } from "../../helpers/errors/domain_errors";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";
import { LessonUsecase } from "../usecases/lesson_usecase";
import { Request, Response } from "express";

export class LessonController {
    constructor(private usecase: LessonUsecase) { }

    createLesson = async (req: Request, res: Response) => {
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

            const lesson = req.body;
            const createdLesson = await this.usecase.create(lesson);
            res.status(200).json(createdLesson);
        } catch (error: any) {
            if (error instanceof NoItemsFound || error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    getLesson = async (req: Request, res: Response) => {
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

    getLessons = async (req: Request, res: Response) => {
        try {
            if (!req.query.courseId) {
                throw new MissingParameters('courseId');
            }

            const courseId = req.query.courseId as string;
            // if (!courseRepository.get(courseId)) {
            //     throw new NoItemsFound('course');
            // }
            const lessons = await this.usecase.getLessons(courseId);
            res.status(200).json(lessons);
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

    updateLesson = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new MissingParameters(req.body);
            }
            const requiredFields = ['lessonId', 'courseId', 'title', 'description', 'videoUrl', 'section'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const lesson = req.body;
            const updatedLesson = await this.usecase.update(lesson);
            res.status(200).json(updatedLesson);
        } catch (error: any) {
            if (error instanceof NoItemsFound || error instanceof MissingParameters) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    deleteLesson = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const deletedLesson = await this.usecase.delete(id);
            res.status(200).json(deletedLesson);
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