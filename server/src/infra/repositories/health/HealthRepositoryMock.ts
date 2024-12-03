import { IHealthRepository } from "../../../domain/repositories/health_repository_interface";

export class HealthRepositoryMock implements IHealthRepository {
  private status: string = 'ok';

  async check(): Promise<{ _id: string; status: string; } | undefined> {
    return { _id: 'mock', status: this.status };
    
  }
}