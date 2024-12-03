import { Document } from "mongoose";

export interface LessonDocument {
    _id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    section: string;
}
