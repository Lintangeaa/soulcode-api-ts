import { Request, Response } from 'express';

export const verifyWebhookWaba = (req: Request, res: Response) => {
  const VERIFY_TOKEN =
    'EAAP9ticn5usBO4ZB5I3nUq4AExwH87D3X36gK9R6Mq14M7h5Qk8z4XjTZBKPJzpNKZCcPl6YJSwplLhUkp30CvlxDADqc84ZAJZCkqsvwLNkYefCbAWBFmjESd9EZB1zzhBj53x52Jbsvxjf0g3qIdxAEeqbZC7uCKt88JDeUC7ZCAYjSE2eQBZCalQL9LTQ2OGInjNDymcTUEGmKUsnGGZA5GgirOhaYZD';

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

export const webhookWaba = (req: Request, res: Response) => {
  const { object, entry } = req.body;
  console.log(JSON.stringify(entry));
  return res
    .status(200)
    .json({ message: 'Webhook received', data: { object, entry } });
};
