import express from 'express';
import { User } from '../../../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  User.findAll().then(users => {
    console.log(`all users ${JSON.stringify(users)}`);
    return res.json(users);
  });
});

export { router };
