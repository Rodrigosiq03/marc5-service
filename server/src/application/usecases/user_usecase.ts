import User from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/user_repository_interface";
import { UserAlreadyExists, NoItemsFound, UserNotRegistered } from "../../helpers/errors/usecase_errors";
import { v4 as uuidv4 } from 'uuid';

export class UserUsecase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create(user: User): Promise<User> {
        user.userId = uuidv4();
        const userExists = await this.userRepository.getByEmail(user.email);

        if (userExists) {
            throw new UserAlreadyExists();
        }
        return this.userRepository.create(user);
    }

    async get(id: string): Promise<User> {
        const user = await this.userRepository.get(id);
        console.log(user);
        if (!user) {
            throw new NoItemsFound('user');
        }

        return user;
    }

    async getByEmail(email: string): Promise<User> {
        const user = await this.userRepository.getByEmail(email);
        if (!user) {
            throw new NoItemsFound('user');
        }

        return user;
    }

    async update(user: User): Promise<User> {
        const userExists = await this.userRepository.get(user.userId!);
        if (!userExists) {
            throw new NoItemsFound('user');
        }
        
        return this.userRepository.update(user);
    }

    async delete(id: string): Promise<User> {
        const deletedUser = await this.userRepository.delete(id);
        if (!deletedUser) {
            throw new NoItemsFound('user');
        }

        return deletedUser;
    }

    async login(username: string, password: string): Promise<{ token: string } | null> {
        const token = await this.userRepository.login(username, password);

        if (!token) {
            throw new UserNotRegistered();
        }

        return token;
    }
}