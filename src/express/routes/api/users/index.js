import express from 'express';
import * as state from './state.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Object.values(state.users));
});

export { router };
