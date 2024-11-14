export default class Course {
    courseId: string;
    imageUrl: string;
    category: string;
    title: string;
    description: string;
    content: string;
    createdBy: string;
    visibility: "public" | "private";
    subscribedUsers: string[]; // [userId]
    price?: number;

    constructor(courseId: string, imageUrl: string, catergory: string, title: string, description: string, content: string, createdBy: string, visibility: "public" | "private", subscribedUsers: string[], price?: number) {
        this.courseId = courseId;
        this.imageUrl = imageUrl;
        this.category = catergory;
        this.title = title;
        this.description = description;
        this.content = content;
        this.createdBy = createdBy;
        this.visibility = visibility;
        this.subscribedUsers = subscribedUsers;
        this.price = price;
    }
}