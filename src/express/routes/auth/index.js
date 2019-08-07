import express from 'express';
import user from '../../config/user.json';
import secretConfig from '../../config/secret.json';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign(username, secretConfig.secret);
    return res.json({
      code: 200,
      message: 'OK',
      data: user,
      token: token
    });
  } else {
    res.json({
      code: 404,
      message: 'Not Found'
    });
  }
});

export { router };
