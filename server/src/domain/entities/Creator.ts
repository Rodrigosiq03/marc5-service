import User from "./User";

export default class Creator extends User {
    maintainedCourses: string[]; // [courseId]

    constructor(userId: string, name: string, email: string, password: string, courses: string[], maintainedCourses: string[], createdBy?: string) {
        super(name, email, password, courses, userId, createdBy);
        this.maintainedCourses = maintainedCourses;
    }
}