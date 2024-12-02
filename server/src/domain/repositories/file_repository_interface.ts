export interface IFileRepository {
  createMultipartUpload(
    courseId: string,
    classId: string,
  ): Promise<string | undefined>;
  uploadPart(
    courseId: string,
    classId: string,
    chunkIndex: number,
    totalChunks: number,
    fileBufferChunk: Buffer | undefined
  ): Promise<{
    uploadId: string | undefined,
    ETag: string | undefined
  } | undefined>
  uploadSimpleFile(
    courseId: string,
    classId: string,
    fileBuffer: Buffer | undefined
  ) : Promise<string>
}