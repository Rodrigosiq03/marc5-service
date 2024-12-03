export interface CourseDocument {
    _id: string;
    imageUrl: string;
    category: string;
    title: string;
    description: string;
    createdBy: string;
    visibility: "public" | "private";
    subscribedUsers: string[];
    price: number;
}