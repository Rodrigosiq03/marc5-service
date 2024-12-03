import { Schema, Document } from "mongoose";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface HealthDocument extends Document {
  _id: string;
  status: string;
}

const HealthSchema: Schema = new Schema<HealthDocument>({
  _id: { type: String, default: uuidv4 },
  status: { type: String, required: true },
});

export const healthModel = mongoose.model<HealthDocument>("Health", HealthSchema);