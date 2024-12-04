import Lesson from "../../../domain/entities/Lesson";
import { ILessonRepository } from "../../../domain/repositories/lesson_repository_interface";
import { connectDB } from "../../database/connection";
import { LessonDocument } from "../../database/models/lesson";

export class LessonRepository implements ILessonRepository {
    async createLesson(lesson: Lesson): Promise<Lesson> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Creating lesson:', lesson);

        const lessonToMongo = { _id: lesson.lessonId as string, courseId: lesson.courseId, title: lesson.title, description: lesson.description, videoUrl: lesson.videoUrl, section: lesson.section };

        const collection = db!.collection<LessonDocument>('Lesson');
        await collection.insertOne(lessonToMongo);
        console.log(`Lesson ${lesson.title} created`);
        return lesson;
    }
    async getLesson(lessonId: string): Promise<Lesson | null> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Getting lesson:', lessonId);
        const collection = db!.collection<LessonDocument>('Lesson');
        
        const response = await collection.findOne({ _id: lessonId });
        if (!response) {
            return null;
        }
        const lesson = new Lesson(response._id, response.courseId, response.title, response.description, response.videoUrl, response.section);
        console.log(`Lesson ${lessonId} retrieved`);
        return lesson;

    }
    async getLessons(courseId: string): Promise<Lesson[]> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Getting lessons for course:', courseId);
        const collection = db!.collection<LessonDocument>('Lesson');
        
        const response = await collection.find({ courseId: courseId }).toArray();
        if (!response) {
            return [];
        }
        const lessons = response.map((lesson) => {
            return new Lesson(lesson._id, lesson.courseId, lesson.title, lesson.description, lesson.videoUrl, lesson.section);
        });
        console.log(`Lessons for course ${courseId} retrieved`);
        return lessons;
    }
    async updateLesson(lesson: Lesson): Promise<Lesson> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Updating lesson:', lesson);
        const collection = db!.collection<LessonDocument>('Lesson');

        const lessonToMongo = { _id: lesson.lessonId as string, courseId: lesson.courseId, title: lesson.title, description: lesson.description, videoUrl: lesson.videoUrl, section: lesson.section };
        await collection.updateOne({ _id: lesson.lessonId }, { $set: lessonToMongo });
        console.log(`Lesson ${lesson.title} updated`);
        return lesson;
    }
    async deleteLesson(lessonId: string): Promise<Lesson | null> {
        var con = await connectDB();
        const db = con.connection.db;
        console.log('Deleting lesson:', lessonId);
        const collection = db!.collection<LessonDocument>('Lesson');
        
        const response = await collection.findOneAndDelete({ _id: lessonId });
        if (!response) {
            return null;
        }
        const lesson = new Lesson(response._id, response.courseId, response.title, response.description, response.videoUrl, response.section);
        console.log(`Lesson ${lessonId} deleted`);
        return lesson;
    }
}