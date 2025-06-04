import { Router } from 'express';
import { endpointHandler } from '../../../libs/config/endpointHandler.js';
import controller from './whatsapp.controller.js';

const whatsappRouter = Router();

whatsappRouter.post('/send-message', endpointHandler(controller.sendMessage));

export default whatsappRouter;
