import { MissingParameters, WrongTypeParameters } from "../../helpers/errors/controller_errors";
import { CreatePreSignedUrlUsecase } from "../usecases/create_pre_signed_url_usecase";
import { Request, Response } from "express";

export class CreatePreSignedUrlController {
  constructor(
    private readonly usecase: CreatePreSignedUrlUsecase
  ) { }

  handle = async (req: Request, res: Response) => {
    try {
      const {
        courseId,
        classId,
      } = req.body

      if (!courseId) throw new MissingParameters('courseId')
      if (!classId) throw new MissingParameters('classId')

      if (typeof courseId !== 'string') throw new WrongTypeParameters('courseId', 'string', typeof courseId)
      if (typeof classId !== 'string') throw new WrongTypeParameters('classId', 'string', typeof classId)

      const urlPreSigned = await this.usecase.execute(
        courseId,
        classId
      )

      res.status(200).json({ urlPreSigned, message: 'Pre-signed URL created' });
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