import { RequestHandler, Router, Request, Response } from "express";
import { healthCheckHandler } from "../controllers/health_check_controller";
import { HealthCheckUsecase } from "../application/usecases/health_check_usecase";
import { HealthRepositoryMongo } from "../repositories/HealthRepository";
import { envs } from "../helpers/envs";

export const healthRouter = Router();

// if (envs.STAGE === "dev" || envs.STAGE === "prod" || envs.STAGE === "hmg") {

//   healthRouter.get("/", 
//   } else {
//     throw new Error("Invalid stage");
//   }

healthRouter.get('/health-db', healthCheckHandler);
healthRouter.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
})




