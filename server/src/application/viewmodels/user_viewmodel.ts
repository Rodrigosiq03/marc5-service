import User from "../../domain/entities/User";

export class UserViewModel {
    userId?: string;
    name: string;
    email: string;
    courses: string[];
    createdBy?: string;
  
    constructor(name: string, email: string, courses: string[], userId?: string, createdBy?: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.courses = courses;
        this.createdBy = createdBy;
    }

    static fromEntity(user: User) {
        return new UserViewModel(user.name, user.email, user.courses, user.userId, user.createdBy);
    }

    toModel() {
        return {
            userId: this.userId,
            name: this.name,
            email: this.email,
            courses: this.courses,
            createdBy: this.createdBy
        };
    }
}