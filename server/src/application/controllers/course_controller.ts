import Course from "../../domain/entities/Course";
import { MissingParameters } from "../../helpers/errors/controller_errors";
import { EntityError } from "../../helpers/errors/domain_errors";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";
import { CourseUsecase } from "../usecases/course_usecase";
import { Request, Response } from "express";

export class CourseController {
    constructor(private readonly courseUsecase: CourseUsecase) {}

    createCourse = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('body');
            }

            const requiredFields = ['imageUrl', 'category', 'title', 'description', 'createdBy', 'visibility', 'price'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }
            if (!req.body.subscribedUsers) {
                req.body.subscribedUsers = [];
            }

            const course = req.body as Course;
            const newCourse = await this.courseUsecase.create(course);
            res.status(200).json(newCourse);
        } catch (error: any) {
            if (error instanceof EntityError) {
                res.status(400).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    getCourse = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const [course, lessons] = await this.courseUsecase.get(id);
            const response = {
                ...course,
                lessons
            }
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

    getAllCourses = async (req: Request, res: Response) => {
        try {
            const courses = await this.courseUsecase.getAll();
            res.status(200).json(courses);
        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    }

    updateCourse = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('body');
            }

            const requiredFields = ['imageUrl', 'category', 'title', 'description', 'createdBy', 'visibility', 'subscribedUsers', 'price'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }

            const course = req.body as Course;
            const updatedCourse = await this.courseUsecase.update(course);
            res.status(200).json(updatedCourse);
        } catch (error: any) {
            if (error instanceof EntityError) {
                res.status(400).send({ message: error.message });
            } else if (error instanceof NoItemsFound) {
                res.status(404).send({ message: error.message });
            }
            else {
                res.status(500).send({ message: error.message });
            }
        }
    }

    deleteCourse = async (req: Request, res: Response) => {
        try {
            if (!req.query.id) {
                throw new MissingParameters('id');
            }

            const id = req.query.id as string;
            const deletedCourse = await this.courseUsecase.delete(id);
            res.status(200).json(deletedCourse);
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

    subscribe = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('body');
            }

            const requiredFields = ['courseId', 'userId'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }
            
            const courseId = req.body.courseId as string;
            const userId = req.body.userId as string;
            const course = await this.courseUsecase.subscribe(courseId, userId);
            res.status(200).json(course);
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

    unsubscribe = async (req: Request, res: Response) => {
        try {
            if (!req.body) {
                throw new EntityError('body');
            }

            const requiredFields = ['courseId', 'userId'];
            for (const field of requiredFields) {
                if (!req.body[field]) {
                    throw new MissingParameters(field);
                }
            }
            
            const courseId = req.body.courseId as string;
            const userId = req.body.userId as string;
            const course = await this.courseUsecase.unsubscribe(courseId, userId);
            res.status(200).json(course);
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

    getSubscribedCourses = async (req: Request, res: Response) => {
        try {
            if (!req.query.userId) {
                throw new MissingParameters('userId');
            }

            const userId = req.query.userId as string;
            const courses = await this.courseUsecase.getSubscribedCourses(userId);
            res.status(200).json(courses);
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