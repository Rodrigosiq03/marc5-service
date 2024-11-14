import { NextFunction, Request, RequestHandler, Response } from "express";
import { HealthCheckUsecase } from "../application/usecases/health_check_usecase";
import { envs } from "../helpers/envs";
import { HealthRepositoryMongo } from "../repositories/HealthRepository";

class HealthCheckController {
  constructor(
    private readonly usecase: HealthCheckUsecase
  ) { }


  async handle(req: Request, res: Response, next?: NextFunction) {
    try {
      const health = await this.usecase.execute()
      res.status(200).json(health);
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    }
  }
}


const healthRepo = new HealthRepositoryMongo();
const healthUsecase = new HealthCheckUsecase(healthRepo);
const healthController = new HealthCheckController(healthUsecase);

export const healthCheckHandler = healthController.handle.bind(healthController);