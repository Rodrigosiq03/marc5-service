import User from "../entities/User";

export interface IUserRepository {
    create(user: User): Promise<User>;
    get(id: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<User | null>;
    login(username: string, password: string): Promise<{ token: string } | null>;
}