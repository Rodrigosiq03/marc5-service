import Class from "../../domain/entities/Class";
import { IClassRepository } from "../../domain/repositories/class_repository_interface";
import { v4 as uuidv4 } from 'uuid';
import { NoItemsFound } from "../../helpers/errors/usecase_errors";

export class ClassUsecase {
    private classRepository: IClassRepository

    constructor(classRepository: IClassRepository) {
        this.classRepository = classRepository;
    }

    async create(classEntity: Class): Promise<Class> {
        classEntity.classId = uuidv4();
        return this.classRepository.createClass(classEntity);
    }

    async get(classId: string): Promise<Class> {
        const classEntity = await this.classRepository.getClass(classId);
        if (!classEntity) {
            throw new NoItemsFound('class');
        }
        return classEntity;
    }

    async getClasses(courseId: string): Promise<Class[]> {
        return this.classRepository.getClasses(courseId);
    }

    async update(classEntity: Class): Promise<Class> {
        const classExists = await this.classRepository.getClass(classEntity.classId!);
        if (!classExists) {
            throw new NoItemsFound('class');
        }
        return this.classRepository.updateClass(classEntity);
    }

    async delete(classId: string): Promise<Class> {
        const deletedClass = await this.classRepository.deleteClass(classId);
        if (!deletedClass) {
            throw new NoItemsFound('class');
        }
        return deletedClass;
    }
}