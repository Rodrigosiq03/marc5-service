import { Request, Response } from "express";
import { IFileRepository } from "../../domain/repositories/file_repository_interface";
import { FailToCreateMultipartUpload } from "../../helpers/errors/usecase_errors";

export class StartUploadUsecase {
  constructor(
    private readonly fileRepo: IFileRepository
  ) { }

  async execute(
    courseId: string,
    classId: string
  ) {
    const upload = await this.fileRepo.createMultipartUpload(
      courseId,
      classId
    )

    if (!upload) throw new FailToCreateMultipartUpload('')

    return upload
  }
}