import Creator from "./creator";

export default class Company extends Creator {
    collaborators: string[]; // [userId]

    constructor(userId: string, name: string, email: string, password: string, courses: string[], maintainedCourses: string[], collaborators: string[], createdBy?: string) {
        super(userId, name, email, password, courses, maintainedCourses, createdBy);
        this.collaborators = collaborators;
    }
}