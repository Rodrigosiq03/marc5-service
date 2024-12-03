import Class from "../../../domain/entities/Class";
import { IClassRepository } from "../../../domain/repositories/class_repository_interface";
import { connectDB } from "../../database/connection";
import { ClassDocument } from "../../database/models/class";

export class ClassRepository implements IClassRepository {
    async createClass(classEntity: Class): Promise<Class> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Creating class:', classEntity);

        const classToMongo = { _id: classEntity.classId as string, courseId: classEntity.courseId, title: classEntity.title, description: classEntity.description, videoUrl: classEntity.videoUrl, section: classEntity.section };

        const collection = db!.collection<ClassDocument>('classes');
        await collection.insertOne(classToMongo);
        console.log(`Class ${classEntity.title} created`);
        return classEntity;
    }
    async getClass(classId: string): Promise<Class | null> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Getting class:', classId);
        const collection = db!.collection<ClassDocument>('classes');
        
        const response = await collection.findOne({ _id: classId });
        if (!response) {
            return null;
        }
        const classEntity = new Class(response.courseId, response.title, response.description, response.videoUrl, response.section, response._id);
        console.log(`Class ${classId} retrieved`);
        return classEntity;

    }
    async getClasses(courseId: string): Promise<Class[]> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Getting classes for course:', courseId);
        const collection = db!.collection<ClassDocument>('classes');
        
        const response = await collection.find({ courseId: courseId }).toArray();
        if (!response) {
            return [];
        }
        const classes = response.map((classDoc) => {
            return new Class(classDoc.courseId, classDoc.title, classDoc.description, classDoc.videoUrl, classDoc.section, classDoc._id);
        });
        console.log(`Classes for course ${courseId} retrieved`);
        return classes;
    }
    async updateClass(classEntity: Class): Promise<Class> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Updating class:', classEntity);
        const collection = db!.collection<ClassDocument>('classes');

        const classToMongo = { _id: classEntity.classId as string, courseId: classEntity.courseId, title: classEntity.title, description: classEntity.description, videoUrl: classEntity.videoUrl, section: classEntity.section };
        await collection.updateOne({ _id: classEntity.classId }, { $set: classToMongo });
        console.log(`Class ${classEntity.title} updated`);
        return classEntity;
    }
    async deleteClass(classId: string): Promise<Class | null> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Deleting class:', classId);
        const collection = db!.collection<ClassDocument>('classes');
        
        const response = await collection.findOneAndDelete({ _id: classId });
        if (!response) {
            return null;
        }
        const classEntity = new Class(response._id, response.courseId, response.title, response.description, response.videoUrl, response.section);
        console.log(`Class ${classId} deleted`);
        return classEntity;
    }
}