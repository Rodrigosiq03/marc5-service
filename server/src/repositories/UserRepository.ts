import { connectDB } from "../database/connection";
import User from "../domain/entities/user";
import { IUserRepository } from "../domain/repositories/user_repository_interface";

export class UserRepository implements IUserRepository {

    async create(user: User) {
        var con = await connectDB();
        console.log('Creating user:', user);
        const db = con.connection.db;
        const collection = db!.collection('users');
        await collection.insertOne(user);
        console.log(`User ${user.name} created`);
        return user;
    }

    async get(userId: string) {
        var con = await connectDB();
        console.log('Getting user:', userId);
        const db = con.connection.db;
        const collection = db!.collection('users');
        const response = await collection.findOne({ id: userId });
        if (!response) {
            return null;
        }
        const user = new User(response.name, response.email, response.password, response.id, response.course);
        console.log(`User ${userId} retrieved`);
        return user;
    }

    async update(user: User) {
        var con = await connectDB();
        console.log('Updating user:', user);
        const db = con.connection.db;
        const collection = db!.collection('users');
        await collection.updateOne({ id: user.userId }, { $set: user });
        console.log(`User ${user.userId} updated`);
        return user;
    }

    async delete(userId: string) {
        var con = await connectDB();
        console.log('Deleting user:', userId);
        const db = con.connection.db;
        const collection = db!.collection('users');
        const response = await collection.findOne({ id: userId });
        if (!response) {
            console.log(`User ${userId} not found`);
            return null;
        }
        await collection.deleteOne({ id: userId });
        console.log(`User ${userId} deleted`);
        return new User(response.name, response.email, response.password, response.id, response.course);
    }

    async login(username: string, password: string) {
        var con = await connectDB();
        console.log('Logging in user:', username);
        const db = con.connection.db;
        const collection = db!.collection('users');
        const response = await collection.findOne({ name: username, password: password });
        if (!response) {
            console.log(`User ${username} not found`);
            return null;
        }
        console.log(`User ${username} logged in`);
        return { token: 'token' }; // TODO: Implementar JWT
    }

    async logout(username: string) {
        console.log('Logging out user:', username);
        console.log(`User ${username} logged out`); // TODO: Implementar JWT
    }


}