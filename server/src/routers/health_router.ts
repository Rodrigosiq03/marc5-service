import { Router, Request, Response } from "express";
import { HealthCheckController } from "../controllers/health_check_controller";
import { HealthCheckUsecase } from "../application/usecases/health_check_usecase";
import { HealthRepositoryMongo } from "../repositories/health/HealthRepository";
import { envs } from "../helpers/envs";
import { HealthRepositoryMock } from "../repositories/health/HealthRepositoryMock";
import { IHealthRepository } from "../domain/repositories/health_repository_interface";

export const healthRouter = Router();

const repo: IHealthRepository = envs.STAGE !== 'test' ? new HealthRepositoryMongo() : new HealthRepositoryMock();
const usecase = new HealthCheckUsecase(repo);
const healthCheckController = new HealthCheckController(usecase);


healthRouter.get('/health-db', healthCheckController.handle);
healthRouter.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
})




