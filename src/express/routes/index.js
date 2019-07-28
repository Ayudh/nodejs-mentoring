import express from 'express';
import { router as apiRouter } from './api';

const router = express.Router();

router.use('/api', apiRouter);

export { router };
