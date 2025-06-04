import { Router } from 'express';
import webhookRouter from './webhook/webhook.routes.js';
import whatsappRouter from './whatsapp/whatsapp.routes.js';

const httpRouter = Router();

httpRouter.use('/webhook', webhookRouter);
httpRouter.use('/whatsapp', whatsappRouter);

export default httpRouter;
