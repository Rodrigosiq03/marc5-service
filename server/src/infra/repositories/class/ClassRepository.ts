import Class from "../../../domain/entities/Class";
import { IClassRepository } from "../../../domain/repositories/class_repository_interface";

export class ClassRepository implements IClassRepository {
    createClass(classEntity: Class): Promise<Class> {
        throw new Error("Method not implemented.");
    }
    getClass(classId: string): Promise<Class | null> {
        throw new Error("Method not implemented.");
    }
    getClasses(courseId: string): Promise<Class[]> {
        throw new Error("Method not implemented.");
    }
    updateClass(classEntity: Class): Promise<Class> {
        throw new Error("Method not implemented.");
    }
    deleteClass(classId: string): Promise<Class | null> {
        throw new Error("Method not implemented.");
    }
}