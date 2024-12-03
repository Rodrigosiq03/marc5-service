export default class User {
    userId?: string;
    name: string;
    email: string;
    password: string;
    courses: string[]; // [courseId]
    createdBy?: string;

    constructor(name: string, email: string, password: string, courses: string[], userId?: string, createdBy?: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.courses = courses;
        this.createdBy = createdBy;
    }
}    