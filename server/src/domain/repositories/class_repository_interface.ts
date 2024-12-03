import Class from "../entities/Class";

export interface IClassRepository {
    createClass(classEntity: Class): Promise<Class>;
    getClass(classId: string): Promise<Class | null>;
    getClasses(courseId: string): Promise<Class[]>;
    updateClass(classEntity: Class): Promise<Class>;
    deleteClass(classId: string): Promise<Class | null>;
}