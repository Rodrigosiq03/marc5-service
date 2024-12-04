import { IFileRepository } from "../../domain/repositories/file_repository_interface";

export class CreatePreSignedUrlUsecase {
  constructor(private readonly fileRepo: IFileRepository) {}
  
  async executeUrlPreSignedVideo(courseId: string, classId: string) {
    const urlPreSigned = await this.fileRepo.createPresignedUrlVideo(courseId, classId)

    return urlPreSigned
  }

  async executeUrlPreSignedUserImage(userId: string, mimetype: string) {
    const urlPreSigned = await this.fileRepo.createPresignedUrlUserImage(userId, mimetype)

    return urlPreSigned
  }

  async executeCourseImage(courseId: string, mimetype: string) {
    const urlPreSigned = await this.fileRepo.createPresignedUrlCourseImage(courseId, mimetype)

    return urlPreSigned
  }

}