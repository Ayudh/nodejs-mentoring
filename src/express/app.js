import express from 'express';
import { queryParser, cookieParser } from './middlewares';
import { router } from './routes';

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(queryParser, cookieParser);
app.use(router);

export default app;
