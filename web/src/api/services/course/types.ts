export interface Lesson {
  lessonId: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl: string;
  section: string;
}

export interface Course {
  courseId: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  createdBy: string;
  visibility: "public" | "private";
  subscribedUsers: string[];
  price: number;
  lessons?: Lesson[];
}

export interface SubscriptionRequest {
  courseId: string;
  userId: string;
}