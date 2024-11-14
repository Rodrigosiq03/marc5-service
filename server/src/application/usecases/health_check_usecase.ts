import { IHealthRepository } from "../../domain/repositories/health_repository_interface";

export class HealthCheckUsecase {
  constructor(private readonly healthRepo: IHealthRepository) {}

  async execute() {
    return await this.healthRepo.check();
  }
}