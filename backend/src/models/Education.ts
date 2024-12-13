// src/models/Education.ts
import { Schema, model, Document } from 'mongoose';

interface IEducation extends Document {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: Date;
  to: Date;
  description: string;
}

const educationSchema = new Schema<IEducation>({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  from: { type: Date },
  to: { type: Date },
  description: { type: String }
}, { timestamps: true });

const Education = model<IEducation>('Education', educationSchema);

export default Education;
