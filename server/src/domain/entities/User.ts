export default class User {
    userId?: string;
    name: string;
    email: string;
    password: string;
    courses: string[]; // [courseId]
    xp: number;
    createdBy?: string;
    pictureUrl?: string;

    constructor(name: string, email: string, password: string, courses: string[], xp: number, userId?: string, createdBy?: string, pictureUrl?: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.courses = courses;
        this.xp = xp;
        this.createdBy = createdBy;
        this.pictureUrl = pictureUrl;
    }
}    