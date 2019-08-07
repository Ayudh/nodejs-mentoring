import express from 'express';
import user from '../../config/user.json';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {
  facebookStrategy,
  googleStrategy,
  localStrategy
} from '../../strategies';

export const authByPassport = type => (req, res) => {
  passport.authenticate(type, (err, user, info) => {
    if (err) {
      return res.send(err);
    }
    return res.send(info);
  })(req, res);
};

const router = express.Router();

passport.use('facebook', facebookStrategy());
passport.use('google', googleStrategy());
passport.use('local', localStrategy());

passport.use(
  new LocalStrategy(function(username, password, done) {
    const { username: configUsername, password: configPassword } = user;
    if (username !== configUsername || password !== configPassword)
      return done(null, false);
    else return done(null, user);
  })
);

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router
  .route('/local')
  .get(
    passport.authenticate('local', { failureRedirect: '/auth/local' }),
    function(req, res) {
      res.redirect('/');
    }
  );

router.route('/facebook').get(passport.authenticate('facebook'));
router.route('/facebook/callback').get(authByPassport('facebook'));

router.route('/twitter').get(passport.authenticate('twitter'));
router.route('/twitter/callback').get(authByPassport('twitter'));

router
  .route('/google')
  .get(passport.authenticate('google', { scope: ['profile'] }));
router.route('/google/callback').get(authByPassport('google'));

export { router };
