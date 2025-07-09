import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import httpRouter from './app/http/index.js';
import logger from './libs/helpers/logger.js';
import serverless from 'serverless-http';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(httpRouter);

app.get('/', (_req, res) => {
  res.send('✅ Hello World!');
});

// ✅ Export handler for Vercel / Lambda
export const handler = serverless(app);

// ✅ Local dev (optional)
if (process.env.LOCAL || process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    logger.info(`🚀 Server is running on http://localhost:${port}`);
  });
}
