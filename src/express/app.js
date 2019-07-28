import express from 'express';
import { queryParser, cookieParser } from './middlewares';
import { router } from './routes';
import { state } from './state';

const app = express();

global.state = state;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(queryParser, cookieParser);
app.use(router);

export default app;
