import { Request, Response } from "express";
import { StartUploadUsecase } from "../application/usecases/start_upload_usecase";
import { MissingParameters, WrongTypeParameters } from "../helpers/errors/controller_errors";
import { FailToCreateMultipartUpload } from "../helpers/errors/usecase_errors";

export class StartUploadController {
  constructor(
    private readonly usecase: StartUploadUsecase
  ) { }

  handle = async (req: Request, res: Response) => {
    try {
      console.log('StartUploadController.handle')

      const {
        courseId,
        classId
      } = req.body

      if (!courseId || !classId) {
        throw new MissingParameters('courseId, classId')
      }

      if (typeof courseId !== 'string') {
        throw new WrongTypeParameters('courseId', 'string', typeof courseId)
      }

      if (typeof classId !== 'string') {
        throw new WrongTypeParameters('classId', 'string', typeof classId)
      }

      const upload = await this.usecase.execute(
        courseId,
        classId
      )
      res.status(200).json({ message: 'Multipart upload created', uploadId: upload });
    } catch (error: any) {
      if (error instanceof MissingParameters || error instanceof WrongTypeParameters) {
        res.status(400).send({ message: error.message });
      }
      if (error instanceof FailToCreateMultipartUpload) {
        res.status(409).send({ message: error.message });
      }
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    }
  }
}