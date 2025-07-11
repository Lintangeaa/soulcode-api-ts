import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { APP_SECRET_KEY } from '../libs/config/index.js';
import { Entity } from '../types/express.js';

const excludedPaths = [
  { path: '/auth/login', method: 'POST' },
  { path: '/auth/register', method: 'POST' },
  { path: '/', method: 'GET' },
  { path: '/products', method: 'GET' },
  { path: '/products/category', method: 'GET' },
];

export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isExcluded = excludedPaths.some(
    (route) => req.path === route.path && req.method === route.method,
  );

  if (isExcluded) return next();

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, APP_SECRET_KEY) as Entity.User;

    req.userData = decoded;
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
