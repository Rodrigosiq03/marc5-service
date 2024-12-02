import { Request, Response } from "express";
import { UploadSimpleFileUsecase } from "../application/usecases/upload_simple_file_usecase";
import { MissingParameters, WrongTypeParameters } from "../helpers/errors/controller_errors";

export class UploadSimpleFileController {
  constructor(
    private readonly usecase: UploadSimpleFileUsecase
  ) {}

  handle = async (req: Request, res: Response) => {
    try {
      const {
        courseId,
        classId,
      } = req.body

      const fileBuffer = req.file?.buffer

      if (!courseId) throw new MissingParameters('courseId')
      if (!classId) throw new MissingParameters('classId')
      if (!fileBuffer) throw new MissingParameters('fileBuffer')

      if (typeof courseId !== 'string') throw new WrongTypeParameters('courseId', 'string', typeof courseId)
      if (typeof classId !== 'string') throw new WrongTypeParameters('classId', 'string', typeof classId)

      const upload = await this.usecase.execute(
        courseId,
        classId,
        fileBuffer
      )

      res.status(200).json({ message: 'File uploaded' });
    } catch (error: any) {
      if (error instanceof MissingParameters) {
        res.status(400).send({ message: error.message });
      }
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    }
  }
}