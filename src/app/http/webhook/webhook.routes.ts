import { Router } from 'express';
import { verifyWebhookWaba, webhookWaba } from './webhook.controller.js';

const webhookRouter = Router();

webhookRouter.get('/waba', verifyWebhookWaba as any);
webhookRouter.post('/waba', webhookWaba as any);

export default webhookRouter;
