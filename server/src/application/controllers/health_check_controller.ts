import { Request, Response } from "express";
import { HealthCheckUsecase } from "../../application/usecases/health_check_usecase";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";

export class HealthCheckController {
  constructor(
    private readonly usecase: HealthCheckUsecase
  ) { }

  handle = async (req: Request, res: Response) => {
    try {
      console.log('HealthCheckController.handle')
      const health = await this.usecase.execute()
      res.status(200).json(health);
    } catch (error: any) {
      if (error instanceof NoItemsFound) {
        res.status(404).send({ message: error.message });
      }
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      }
    }
  }
}