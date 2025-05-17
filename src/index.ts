import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import webhookRouter from './app/http/webhook/webhook.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Logger
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/webhook', webhookRouter);

app.get('/', (_req, res) => {
  res.send('✅ Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
