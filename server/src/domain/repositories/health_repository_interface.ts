export interface IHealthRepository {
  check(): Promise<{ _id: string; status: string } | undefined>;
}