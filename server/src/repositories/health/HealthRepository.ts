import { connectDB } from "../../database/connection";
import { IHealthRepository } from "../../domain/repositories/health_repository_interface";
import { HealthDocument } from "../../database/models/health";

export class HealthRepositoryMongo implements IHealthRepository {
  async check(): Promise<{ _id: string; status: string; } | undefined> {
    try {
      const con = await connectDB()
      const clientModel = con.connections[0].db?.collection<HealthDocument>('Health')

      const health = await clientModel?.findOne()

      console.log('HealthRepositoryMongo.check')
      console.log(health)

      if (!health || health === null) return undefined

      return health
      
    } catch (error) {
      throw new Error(`Error checking health: ${error}`)
    }
  }
}