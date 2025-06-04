import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import httpRouter from './app/http/index.js';
import logger from './libs/helpers/logger.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(httpRouter);

app.get('/', (_req, res) => {
  res.send('✅ Hello World!');
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
