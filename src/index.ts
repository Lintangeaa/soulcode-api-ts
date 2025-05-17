import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_req, res) => {
  res.send('✅ Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
