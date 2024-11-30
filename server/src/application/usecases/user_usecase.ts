import User from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/user_repository_interface";
import { EntityError } from "../../helpers/errors/domain_errors";
import { UserAlreadyExists, NoItemsFound, UserNotRegistered } from "../../helpers/errors/usecase_errors";

export class UserUsecase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create(user: User): Promise<User> {
        const userExists = await this.userRepository.get(user.userId);

        if (userExists) {
            throw new UserAlreadyExists();
        }
        return this.userRepository.create(user);
    }

    async get(id: string): Promise<User | null> {
        const user = await this.userRepository.get(id);

        if (!user) {
            throw new NoItemsFound('user');
        }

        return user;
    }

    async update(user: User): Promise<User | null> {
        const userExists = await this.userRepository.get(user.userId);
        if (!userExists) {
            throw new NoItemsFound('user');
        }
        
        return this.userRepository.update(user);
    }

    async delete(id: string): Promise<User | null> {
        const user = await this.userRepository.get(id);
        if (!user) {
            throw new NoItemsFound('user');
        }

        return this.userRepository.delete(id);
    }

    async login(username: string, password: string): Promise<{ token: string } | null> {
        const token = await this.userRepository.login(username, password);

        if (!token) {
            throw new UserNotRegistered();
        }

        return token;
    }
}