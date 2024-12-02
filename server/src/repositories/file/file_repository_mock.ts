import { IFileRepository } from "../../domain/repositories/file_repository_interface";

export class FileRepositoryMock implements IFileRepository {
  async createMultipartUpload(
    courseId: string,
    classId: string,
  ): Promise<string | undefined> {
    return 'mocked_upload_id';
  }

  async uploadPart(
    courseId: string,
    classId: string,
    chunkIndex: number,
    totalChunks: number,
    fileBufferChunk: Buffer | undefined
  ): Promise<{
    uploadId: string | undefined,
    ETag: string | undefined
  } | undefined> {
    return;
  }

  async uploadSimpleFile(courseId: string, classId: string, fileBuffer: Buffer | undefined): Promise<string> {
    return 'mocked_upload_id';
  }
}