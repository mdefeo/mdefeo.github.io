// src/models/Experience.ts
import { Schema, model, Document } from 'mongoose';

interface IExperience extends Document {
  title: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}

const experienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String, required: true }
}, { timestamps: true });

const Experience = model<IExperience>('Experience', experienceSchema);

export default Experience;
