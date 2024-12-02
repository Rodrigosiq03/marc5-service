import { IFileRepository } from "../../domain/repositories/file_repository_interface";

export class UploadChunkUsecase {
  constructor(
    private readonly fileRepo: IFileRepository
  ) {}

  async execute(
    courseId: string,
    classId: string,
    chunkIndex: number,
    totalChunks: number,
    fileBufferChunk: Buffer | undefined
  ) {
    const message = await this.fileRepo.uploadPart(
      courseId,
      classId,
      chunkIndex,
      totalChunks,
      fileBufferChunk
    )

    if (!message) throw new Error('Fail to upload chunk')

    return message
  }
}