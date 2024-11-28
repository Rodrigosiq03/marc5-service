import { IHealthRepository } from "../../domain/repositories/health_repository_interface";
import { NoItemsFound } from "../../helpers/errors/usecase_errors";

export class HealthCheckUsecase {
  constructor(private readonly healthRepo: IHealthRepository) {}

  async execute() {
    console.log('HealthCheckUsecase.execute')
    const result = await this.healthRepo.check();
    if (!result) {
      console.log('HealthCheckUsecase.execute: no health found')
      console.log(result)
      throw new NoItemsFound('health');
    }
    return result;
  }
}