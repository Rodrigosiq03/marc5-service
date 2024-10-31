export default class Class {
    classId: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;

    constructor(classId: string, courseId: string, title: string, description: string, videoUrl: string) {
        this.classId = classId;
        this.courseId = courseId;
        this.title = title;
        this.description = description;
        this.videoUrl = videoUrl;
    }
}