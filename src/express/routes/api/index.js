import express from 'express';
import { router as userRouter } from './users';
import { router as productRouter } from './products';
import { router as cityRouter } from './cities';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/cities', cityRouter);

export { router };
