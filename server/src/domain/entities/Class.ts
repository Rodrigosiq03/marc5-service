export default class Class {
    classId: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    section: string;

    constructor(classId: string, courseId: string, title: string, description: string, videoUrl: string, section: string) {
        this.classId = classId;
        this.courseId = courseId;
        this.title = title;
        this.description = description;
        this.videoUrl = videoUrl;
        this.section = section;
    }
}