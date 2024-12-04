import User from "../../domain/entities/User";

export class UserViewModel {
    userId?: string;
    name: string;
    email: string;
    courses: string[];
    xp: number;
    createdBy?: string;
    pictureUrl?: string;
  
    constructor(name: string, email: string, courses: string[], xp: number, userId?: string, createdBy?: string, pictureUrl?: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.courses = courses;
        this.xp = xp;
        this.createdBy = createdBy;
        this.pictureUrl = pictureUrl;
    }

    static fromEntity(user: User) {
        return new UserViewModel(user.name, user.email, user.courses, user.xp, user.userId, user.createdBy, user.pictureUrl);
    }

    toModel() {
        return {
            userId: this.userId,
            name: this.name,
            email: this.email,
            courses: this.courses,
            xp: this.xp,
            createdBy: this.createdBy,
            pictureUrl: this.pictureUrl
        };
    }
}