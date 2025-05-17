import { Router } from 'express';
import { webhookWaba } from './webhook.controller.js';

const webhookRouter = Router();

webhookRouter.get('/waba', webhookWaba as any);

export default webhookRouter;
