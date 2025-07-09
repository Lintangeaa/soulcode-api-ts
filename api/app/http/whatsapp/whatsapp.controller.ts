import logger from '../../../libs/helpers/logger.js';
import WabaService from '../../../shared/services/waba.service.js';
import { TEndpointHandler } from '../../../types/express.js';

const sendMessage: TEndpointHandler = async (req) => {
  const { noHp, message } = req.body;

  const wabaService = new WabaService();

  const sendMessageResponse = await wabaService.sendMessage('text', {
    noHp,
    message,
  });

  logger.info(sendMessageResponse);

  return {
    message: 'Message sent successfully',
  };
};

export default {
  sendMessage,
};
