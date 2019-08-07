import express from 'express';
import { queryParser, cookieParser } from './middlewares';
import { router } from './routes';
import passport from 'passport';

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(queryParser, cookieParser);
app.use(router);

export default app;
