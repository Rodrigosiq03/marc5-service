import User from "./User";

export default class Creator extends User {
    maintainedCourses: string[]; // [courseId]

    constructor(userId: string, name: string, email: string, password: string, courses: string[], xp: number, maintainedCourses: string[], createdBy?: string, pictureUrl?: string) {
        super(name, email, password, courses, xp, userId, createdBy, pictureUrl);
        this.maintainedCourses = maintainedCourses;
    }
}