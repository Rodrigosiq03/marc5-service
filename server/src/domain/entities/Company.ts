import Creator from "./Creator";

export default class Company extends Creator {
    collaborators: string[]; // [userId]

    constructor(userId: string, name: string, email: string, password: string, courses: string[], xp: number, maintainedCourses: string[], collaborators: string[], createdBy?: string, pictureUrl?: string) {
        super(userId, name, email, password, courses, xp, maintainedCourses, createdBy, pictureUrl);
        this.collaborators = collaborators;
    }
}