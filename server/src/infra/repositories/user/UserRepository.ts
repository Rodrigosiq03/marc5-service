import { connectDB } from "../../database/connection";
import User from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/user_repository_interface";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { EntityError } from "../../../helpers/errors/domain_errors";
import { ObjectId }  from 'mongodb';
import { UserDocument } from "../../database/models/user";

export class UserRepository implements IUserRepository {

    async create(user: User) {
        var con = await connectDB();
        console.log('Creating user:', user);
        const password = await bcrypt.hash(user.password, 10);
        const userToMongo = { _id: user.userId as string, name: user.name, email: user.email, password: password, courses: user.courses, xp: user.xp, createdBy: user.createdBy, pictureUrl: user.pictureUrl };
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        await collection.insertOne(userToMongo);
        console.log(`User ${user.name} created`);
        return user;
    }

    async get(userId: string) {
        var con = await connectDB();
        console.log('Getting user:', userId);
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        const response = await collection.findOne({ _id: userId });
        console.log(response);
        if (!response) {
            return null;
        }
        const user = new User(response.name, response.email, response.password,response.courses, response.xp, response._id, response.createdBy, response.pictureUrl);
        console.log(`User ${userId} retrieved`);
        return user;
    }

    async getByEmail(email: string) {
        var con = await connectDB();
        console.log('Getting user by email:', email);
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        const response = await collection.findOne({ email: email });
        if (!response) {
            return null;
        }
        const user = new User(response.name, response.email, response.password,response.courses, response.xp, response._id, response.createdBy, response.pictureUrl);
        console.log(`User ${email} retrieved`);
        return user;
    }

    async update(user: User) {
        var con = await connectDB();
        console.log('Updating user:', user);
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const userToMongo = { _id: user.userId as string, name: user.name, email: user.email, password: hashedPassword, courses: user.courses, xp: user.xp, createdBy: user.createdBy, pictureUrl: user.pictureUrl };
        await collection.updateOne({ _id: user.userId }, { $set: userToMongo });
        console.log(`User ${user.userId} updated`);
        return user;
    }

    async delete(userId: string) {
        var con = await connectDB();
        console.log('Deleting user:', userId);
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        const response = await collection.findOne({ _id: userId });
        if (!response) {
            console.log(`User ${userId} not found`);
            return null;
        }
        await collection.deleteOne({ _id: userId });
        console.log(`User ${userId} deleted`);
        return new User(response.name, response.email, response.password,response.courses, response.xp, response._id, response.createdBy, response.pictureUrl);
    }

    async login(email: string, password: string) {
        var con = await connectDB();
        const JWT_SECRET = process.env.JWT_SECRET!;
        console.log('Logging in user:', email);
        const db = con.connection.db;
        const collection = db!.collection<UserDocument>('User');
        const user = await collection.findOne({ email: email });
        if (!user) {
            console.log(`User ${email} not found`);
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Invalid password');
            throw new EntityError('password');
        }
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email, courses: user.courses, xp:user.xp, pictureUrl: user.pictureUrl }, JWT_SECRET, { expiresIn: '1h' });
        console.log(`User ${email} logged in`);
        return { token };
    }
}