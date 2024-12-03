import { Document } from "mongoose";

export interface ClassDocument {
    _id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    section: string;
}
