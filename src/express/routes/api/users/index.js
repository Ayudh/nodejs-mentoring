import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Object.values(global.state.users));
});

export { router };
