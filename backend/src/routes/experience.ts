// src/routes/experienceRoutes.ts
import express from 'express';
import { createExperience } from '../controllers/experienceController';
import authenticateToken from '../middleware/auth/token';

const router = express.Router();

router.post('/', authenticateToken, createExperience);

export default router;
