import { Request, Response } from 'express';

export const webhookWaba = (req: Request, res: Response) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[Webhook] Verification success');
    return res.status(200).send(challenge as string);
  } else {
    console.warn('[Webhook] Verification failed');
    return res.sendStatus(403);
  }
};
