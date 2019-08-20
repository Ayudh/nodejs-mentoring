import express from 'express';
import { User } from '../../../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (error, users) => {
    if (error) return res.json({ error });
    return res.json(users);
  });
});

router.post('/', (req, res) => {
  const { password, username, email } = req.body;
  User.create(
    {
      password,
      username,
      email
    },
    (error, user) => {
      if (error) return res.json({ error });
      return res.json(user);
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.remove({ _id: id }, error => {
    if (error) res.json({ error });
    return res.json({ success: true });
  });
});

export { router };
