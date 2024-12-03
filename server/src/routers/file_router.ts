import { Router, Request, Response } from "express";
import { IFileRepository } from "../domain/repositories/file_repository_interface";
import { envs } from "../helpers/envs";
import { FileRepositoryS3 } from "../infra/repositories/file/FileRepositoryS3";
import { FileRepositoryMock } from "../infra/repositories/file/FileRepositoryMock";
import { CreatePreSignedUrlUsecase } from "../application/usecases/create_pre_signed_url_usecase";
import { CreatePreSignedUrlController } from "../application/controllers/create_pre_signed_url_controller";

const fileRouter = Router();
const fileRepo: IFileRepository = envs.STAGE !== 'test' ? new FileRepositoryS3() : new FileRepositoryMock();

const createPreSignedUrlUsecase = new CreatePreSignedUrlUsecase(fileRepo);
const createPreSignedUrlController = new CreatePreSignedUrlController(createPreSignedUrlUsecase);

fileRouter.post('/upload-health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'upload ok' });
})

fileRouter.post('/presigned-url/video', createPreSignedUrlController.createPreSignedUrlVideo);
fileRouter.post('/presigned-url/course-image', createPreSignedUrlController.createPreSignedUrlCourseImage);
fileRouter.post('/presigned-url/user-image', createPreSignedUrlController.createPreSignedUrlUserImage);

export { fileRouter }