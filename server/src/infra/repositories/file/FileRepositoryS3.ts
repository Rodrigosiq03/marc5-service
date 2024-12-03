import { IFileRepository } from "../../../domain/repositories/file_repository_interface";
import {
  S3Client,
  CreateMultipartUploadCommand,
  CreateBucketCommandInput,
  
  UploadPartCommand,
  UploadPartCommandInput,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandInput,
  PutObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import multer from "multer";
import { envs } from "../../../helpers/envs";


let uploadId: string | undefined = undefined



export class FileRepositoryS3 implements IFileRepository {
  async createMultipartUpload(
    courseId: string,
    classId: string,
  ): Promise<string | undefined> {
    try {
      const finalKey = `${courseId}/${classId}.mp4`;
      const client = new S3Client({ region: envs.AWS_REGION });
      const command = new CreateMultipartUploadCommand({
        Bucket: envs.S3_BUCKET_NAME,
        Key: finalKey,
        ContentType: 'video/mp4',
      });

      const response = await client.send(command);
      uploadId = response.UploadId;

      return uploadId;
    } catch (error: any) {
      throw new Error(`Error - FileRepos creating multipart upload: ${error.message}`);
    }
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
    try {
      const finalKey = `${courseId}/${classId}.mp4`;
      const client = new S3Client({ region: envs.AWS_REGION });
      const command = new UploadPartCommand({
        Bucket: envs.S3_BUCKET_NAME,
        Key: finalKey,
        PartNumber: chunkIndex,
        UploadId: uploadId,
        Body: fileBufferChunk,
      });

      const response = await client.send(command);

      if (chunkIndex === totalChunks) {
        const parts = Array.from({ length: totalChunks }, (_, i) => ({ PartNumber: i + 1, ETag: response.ETag }));
        const command = new CompleteMultipartUploadCommand({
          Bucket: envs.S3_BUCKET_NAME,
          Key: finalKey,
          UploadId: uploadId,
          MultipartUpload: { Parts: parts },
        });

        const resp = await client.send(command);
        return { uploadId: uploadId, ETag: resp.ETag };
      }


    } catch (error: any) {
      throw new Error(`Error - FileRepos uploading part: ${error.message}`);
    }
  }


  async uploadSimpleFile(
    courseId: string,
    classId: string,
    fileBuffer: Buffer | undefined
  ): Promise<string> {
    try {
      const finalKey = `${courseId}/${classId}.mp4`;
      const client = new S3Client({ region: envs.AWS_REGION });
      const command = new PutObjectCommand({
        Bucket: envs.S3_BUCKET_NAME,
        Key: finalKey,
        Body: fileBuffer,
        ContentType: 'video/mp4',
      })

      await client.send(command);

      return finalKey;

    } catch (error: any) {
      throw new Error(`Error - FileRepos uploading part: ${error.message}`);
    }
  }

  async createPresignedUrlVideo(courseId: string, classId: string): Promise<string> {
    try {
      const finalKey = `${courseId}/${classId}.mp4`;
      const client = new S3Client({ region: envs.AWS_REGION });
      const command = new PutObjectCommand({
        Bucket: envs.S3_BUCKET_NAME,
        Key: finalKey,
        ContentType: 'video/mp4',
      });

      const response = await getSignedUrl(client, command, { expiresIn: 3600 });

      return response;
    } catch (error: any) {
      throw new Error(`Error - FileRepos creating presigned url: ${error.message}`);
    }
  }
}