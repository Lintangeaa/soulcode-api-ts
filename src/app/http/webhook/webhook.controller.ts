import { Request, Response } from 'express';
import logger from '../../../libs/helpers/logger.js';
import WabaService from '../../../shared/services/waba.service.js';

const wabaService = new WabaService();

export const verifyWebhookWaba = (req: Request, res: Response) => {
  const VERIFY_TOKEN =
    'EAAP9ticn5usBO4ZB5I3nUq4AExwH87D3X36gK9R6Mq14M7h5Qk8z4XjTZBKPJzpNKZCcPl6YJSwplLhUkp30CvlxDADqc84ZAJZCkqsvwLNkYefCbAWBFmjESd9EZB1zzhBj53x52Jbsvxjf0g3qIdxAEeqbZC7uCKt88JDeUC7ZCAYjSE2eQBZCalQL9LTQ2OGInjNDymcTUEGmKUsnGGZA5GgirOhaYZD';

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    logger.info('[Webhook] Verification success');
    return res.status(200).send(challenge as string);
  } else {
    logger.warn('[Webhook] Verification failed');
    return res.sendStatus(403);
  }
};

export const webhookWaba = async (req: Request, res: Response) => {
  const payload: WhatsAppWebhookPayload = req.body;

  for (const entry of payload.entry) {
    for (const change of entry.changes) {
      const contactName = change.value.contacts[0].profile.name;

      for (const message of change.value.messages) {
        logger.info(message);

        const pesan = `Selamat datang di Soulcdeo, Kak ${contactName}!`;

        const sendMessage = await wabaService.sendMessage('text', {
          noHp: message.from,
          message: pesan,
        });

        logger.info(sendMessage);
      }
    }
  }

  return res.sendStatus(200);
};
