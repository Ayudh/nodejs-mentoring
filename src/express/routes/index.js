import express from 'express';
import { router as apiRouter } from './api';
import { router as authRouter } from './auth';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export { router };
