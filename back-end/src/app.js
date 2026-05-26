import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import eventsRouter from './routes/events.js';

const app = express();

const allowedOrigins = (
  process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Origem não permitida pelo CORS.'));
    },
    credentials: true,
  }),
);

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);

export default app;
