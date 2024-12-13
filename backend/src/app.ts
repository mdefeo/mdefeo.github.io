// src/app.ts
import express from 'express';
import connectDB from './config/db';
import experienceRoutes from './routes/experience';
import bodyParser from 'body-parser';

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api/experiences', experienceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
