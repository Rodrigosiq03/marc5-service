export default class Lesson {
    lessonId: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl: string;
    section: string;

    constructor(lessonId: string, courseId: string, title: string, description: string, videoUrl: string, section: string) {
        this.lessonId = lessonId;
        this.courseId = courseId;
        this.title = title;
        this.description = description;
        this.videoUrl = videoUrl;
        this.section = section;
    }
}