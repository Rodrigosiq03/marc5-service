export default class Course {
    courseId: string;
    title: string;
    description: string;
    content: string;
    createdBy: string;
    visibility: "public" | "private";
    subscribedUsers: string[]; // [userId]
    price?: number;

    constructor(courseId: string, title: string, description: string, content: string, createdBy: string, visibility: "public" | "private", subscribedUsers: string[], price?: number) {
        this.courseId = courseId;
        this.title = title;
        this.description = description;
        this.content = content;
        this.createdBy = createdBy;
        this.visibility = visibility;
        this.subscribedUsers = subscribedUsers;
        this.price = price;
    }
}