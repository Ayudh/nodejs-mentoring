import { Strategy as FacebookStrategy } from 'passport-facebook';
import * as config from '../config/strategies';

export const facebookStrategy = () => {
  return new FacebookStrategy(
    {
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackUrl
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile, {
        code: 200,
        message: 'Facebook Authentication Successful',
        data: profile,
        token: refreshToken
      });
    }
  );
};
