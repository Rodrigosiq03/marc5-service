import { connectDB } from "../database/connection";
import { IHealthRepository } from "../domain/repositories/health_repository_interface";
import { healthModel } from "../database/models/health";

export class HealthRepositoryMongo implements IHealthRepository {  
  async check(): Promise<{ _id: string; status: string; } | undefined> {
    try {
      await connectDB()
      const health = await healthModel.find()

      if (!health) return undefined

      return health[0]
      
    } catch (error) {
      throw new Error(`Error checking health: ${error}`)
    }
  }
}