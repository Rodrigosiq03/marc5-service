import { IFileRepository } from "../../domain/repositories/file_repository_interface";

export class CreatePreSignedUrlUsecase {
  constructor(private readonly fileRepo: IFileRepository) {}
  
  async execute(courseId: string, classId: string) {
    const urlPreSigned = await this.fileRepo.createPresignedUrlVideo(courseId, classId)

    return urlPreSigned
  }
}