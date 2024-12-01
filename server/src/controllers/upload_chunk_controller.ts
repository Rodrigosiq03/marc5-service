import { Request, Response } from "express";
import { UploadChunkUsecase } from "../application/usecases/upload_chunk_usecase";
import multer from 'multer';
import { MissingParameters, WrongTypeParameters } from "../helpers/errors/controller_errors";

const upload = multer({ storage: multer.memoryStorage() });

export class UploadChunkController {
  constructor(
    private readonly usecase: UploadChunkUsecase
  ) {}

  handle = async (req: Request, res: Response) => {
    try {
      const {
        chunkIndex,
        totalChunks,
        courseId,
        classId,
      } = req.body

      const fileBufferChunk = req.file?.buffer

      if (!chunkIndex) throw new MissingParameters('chunkIndex')
      if (!totalChunks) throw new MissingParameters('totalChunks')
      if (!courseId) throw new MissingParameters('courseId')
      if (!classId) throw new MissingParameters('classId')

      if (typeof chunkIndex !== 'number') throw new WrongTypeParameters('chunkIndex', 'number', typeof chunkIndex)
      if (typeof totalChunks !== 'number') throw new WrongTypeParameters('totalChunks', 'number', typeof totalChunks)
      if (typeof courseId !== 'string') throw new WrongTypeParameters('courseId', 'string', typeof courseId)
      if (typeof classId !== 'string') throw new WrongTypeParameters('classId', 'string', typeof classId)

      const upload = await this.usecase.execute(
        courseId,
        classId,
        chunkIndex,
        totalChunks,
        fileBufferChunk
      )

      if (upload.ETag) res.status(200).json({
        message: 'File uploaded',
        ETag: upload.ETag
      });

      res.status(200).json({ message: 'Chunk uploaded' });

    } catch (error: any) {
      if (error instanceof MissingParameters || error instanceof WrongTypeParameters) {
        res.status(400).send({ message: error.message });
      }
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    }
  }
}