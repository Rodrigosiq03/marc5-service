import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface UserDocument extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  courses: string[];
}

const UserSchema: Schema = new Schema<UserDocument>({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: { type: [String], default: [] },
});

export const userModel = mongoose.model<UserDocument>("Users", UserSchema);