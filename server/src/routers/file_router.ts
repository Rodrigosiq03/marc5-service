import { Router, Request, Response } from "express";
import { IFileRepository } from "../domain/repositories/file_repository_interface";
import { envs } from "../helpers/envs";
import { FileRepositoryS3 } from "../repositories/file/file_repository_s3";
import { FileRepositoryMock } from "../repositories/file/file_repository_mock";
import multer from "multer";
import { StartUploadUsecase } from "../application/usecases/start_upload_usecase";
import { StartUploadController } from "../controllers/start_upload_controller";
import { UploadChunkUsecase } from "../application/usecases/upload_chunk_usecase";
import { UploadChunkController } from "../controllers/upload_chunk_controller";

const fileRouter = Router();
const fileRepo: IFileRepository = envs.STAGE !== 'test' ? new FileRepositoryS3() : new FileRepositoryMock();
const startUploadUsecase = new StartUploadUsecase(fileRepo);
const startUploadController = new StartUploadController(startUploadUsecase);

const uploadPartUsecase = new UploadChunkUsecase(fileRepo);
const uploadPartController = new UploadChunkController(uploadPartUsecase);

const upload = multer({ storage: multer.memoryStorage() });

fileRouter.post('/upload-health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'upload ok' });
})

fileRouter.post('/start-upload', startUploadController.handle)
fileRouter.post('/upload-chunk', upload.single('chunk'), uploadPartController.handle)