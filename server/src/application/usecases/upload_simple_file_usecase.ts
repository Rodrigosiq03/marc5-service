import { IFileRepository } from "../../domain/repositories/file_repository_interface"
import { FailToUploadSimpleFile } from "../../helpers/errors/usecase_errors"

export class UploadSimpleFileUsecase {
  constructor(
    private readonly fileRepo: IFileRepository
  ) { }

  async execute(
    courseId: string,
    classId: string,
    fileBuffer: Buffer
  ) {
    const upload = await this.fileRepo.uploadSimpleFile(
      courseId,
      classId,
      fileBuffer
    )

    if (!upload) throw new FailToUploadSimpleFile('')

    return upload
  }
}