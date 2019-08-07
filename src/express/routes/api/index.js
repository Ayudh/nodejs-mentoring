import express from 'express';
import { router as userRouter } from './users';
import { router as productRouter } from './products';
import { tokenVerifier } from '../../middlewares';

const router = express.Router();

router.use(tokenVerifier);

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.use('/users', userRouter);
router.use('/products', productRouter);

export { router };
