import secretConfig from '../config/secret.json';
import * as jwt from 'jsonwebtoken';

export function tokenVerifier(req, res, next) {
  try {
    const { token } = req.headers;
    const { secret } = secretConfig;

    if (!token) {
      return res.json({
        code: 401,
        message: 'Unautherized',
        data: 'No token passed'
      });
    }

    return jwt.verify(token, secret, err => {
      if (err) {
        res.json({
          code: 401,
          message: 'Unauthorized',
          data: 'Incorrect token'
        });
      } else {
        return next();
      }
    });
  } catch (err) {
    return res.json(err);
  }
}
