import { connectDB } from "../database/connection";
import User from "../domain/entities/user";

export class UserRepository {

    async createUser(user: User) {
        var con = await connectDB();
        console.log('Creating user:', user);
        const db = con.connection.db;
        const collection = db!.collection('users');
        await collection.insertOne(user);
        console.log(`User ${user.name} created`);
    }
}