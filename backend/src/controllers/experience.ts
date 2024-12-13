// src/controllers/experience.ts
import { Request, Response } from 'express';
import Experience from '../models/Experience';

export const createExperience = async (req: Request, res: Response): Promise<void> => {
  const { title, description, createdBy, updatedBy } = req.body;

  try {
    // Create a new experience instance
    const newExperience = new Experience({
      title,
      description,
      createdBy,
      updatedBy
    });

    // Save to the database
    await newExperience.save();

    // Send the created experience as response
    res.status(201).json(newExperience);
  } catch (error: unknown) {
    // TypeScript will know error is an instance of Error now
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      // Fallback error handling for unknown error types
      res.status(400).json({ message: 'An unknown error occurred.' });
    }
  }
};
