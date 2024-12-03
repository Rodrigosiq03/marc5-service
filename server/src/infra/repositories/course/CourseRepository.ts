import Course from "../../../domain/entities/Course";
import { ICourseRepository } from "../../../domain/repositories/course_repository_interface";
import { connectDB } from "../../database/connection";
import { CourseDocument } from "../../database/models/course";
import { UserDocument } from "../../database/models/user";


// courseId: string;
// imageUrl: string;
// category: string;
// title: string;
// description: string;
// createdBy: string;
// visibility: "public" | "private";
// subscribedUsers: string[]; // [userId]
// price: number;
export class CourseRepository implements ICourseRepository {
    async create(course: Course): Promise<Course> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');
        
        const courseToMongo = { _id: course.courseId as string, imageUrl: course.imageUrl, category: course.category, title: course.title, description: course.description, createdBy: course.createdBy, visibility: course.visibility, subscribedUsers: course.subscribedUsers, price: course.price };
        await collection.insertOne(courseToMongo);
        return course;
    }

    async get(id: string): Promise<Course | null> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');

        const response = await collection.findOne({ _id: id });
        if (!response) {
            return null;
        }
        const course = new Course(response._id, response.imageUrl, response.category, response.title, response.description, response.createdBy, response.visibility, response.subscribedUsers, response.price);
        return course;
    }
    async getAll(): Promise<Course[]> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');

        const response = await collection.find().toArray();
        if (!response) {
            return [];
        }
        const courses = response.map((course) => new Course(course._id, course.imageUrl, course.category, course.title, course.description, course.createdBy, course.visibility, course.subscribedUsers, course.price));
        return courses;
    }
    async update(course: Course): Promise<Course> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');

        const courseToMongo = { _id: course.courseId as string, imageUrl: course.imageUrl, category: course.category, title: course.title, description: course.description, createdBy: course.createdBy, visibility: course.visibility, subscribedUsers: course.subscribedUsers, price: course.price };
        await collection.updateOne({ _id: course.courseId }, { $set: courseToMongo });
        return course;
    }
    async delete(id: string): Promise<Course | null> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');

        const response = await collection.findOne({ _id: id });
        if (!response) {
            return null;
        }
        await collection.deleteOne({ _id: id });
        const course = new Course(response._id, response.imageUrl, response.category, response.title, response.description, response.createdBy, response.visibility, response.subscribedUsers, response.price);
        return course;
    }
    async subscribe(courseId: string, userId: string): Promise<Course | null> {
        var con = await connectDB();
        const db = con.connection.db;
        const courseCollection = db!.collection<CourseDocument>('Course');
        const userCollection = db!.collection<UserDocument>('User');

        const course = await courseCollection.findOne({ _id: courseId });
        if (!course) {
            return null;
        }
        if (!course.subscribedUsers.includes(userId)) {
            await courseCollection.updateOne({ _id: courseId }, { $push: { subscribedUsers: userId } });
            await userCollection.updateOne({ _id: userId }, { $push: { subscribedCourses: courseId } });
        }
        course.subscribedUsers.push(userId);
        return new Course(course._id, course.imageUrl, course.category, course.title, course.description, course.createdBy, course.visibility, course.subscribedUsers, course.price);
    }
    async unsubscribe(courseId: string, userId: string): Promise<Course | null> {
        var con = await connectDB();
        const db = con.connection.db;
        const courseCollection = db!.collection<CourseDocument>('Course');
        const userCollection = db!.collection<UserDocument>('User');

        const course = await courseCollection.findOne({ _id: courseId });
        if (!course) {
            return null;
        }
        if (course.subscribedUsers.includes(userId)) {
            await courseCollection.updateOne({ _id: courseId }, { $pull: { subscribedUsers: userId } });
            await userCollection.updateOne({ _id: userId }, { $pull: { subscribedCourses: courseId } });
        }
        course.subscribedUsers = course.subscribedUsers.filter((user) => user !== userId);
        return new Course(course._id, course.imageUrl, course.category, course.title, course.description, course.createdBy, course.visibility, course.subscribedUsers, course.price);
    }
    async getSubscribedCourses(userId: string): Promise<Course[]> {
        var con = await connectDB();
        const db = con.connection.db;
        const collection = db!.collection<CourseDocument>('Course');

        const response = await collection.find({ subscribedUsers: userId }).toArray();
        const courses = response.map((course) => new Course(course._id, course.imageUrl, course.category, course.title, course.description, course.createdBy, course.visibility, course.subscribedUsers, course.price));
        return courses;
    }
}