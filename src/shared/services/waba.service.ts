import { wabaConfig } from '../../libs/config/index.js';
import ApiClient from '../../libs/helpers/apiClient.js';

const apiClient = new ApiClient(wabaConfig.BASE_URL, wabaConfig.SECRET_KEY);

export default class WabaService {
  async sendMessage(
    type: 'text',
    payload: {
      noHp: string;
      message: any;
    },
  ) {
    let initialBody: any = {
      messaging_product: 'whatsapp',
      to: payload.noHp,
      type,
    };

    if (type === 'text') {
      initialBody.text = {
        body: payload.message,
      };
    }

    const response = await apiClient.post(
      `/${wabaConfig.PHONE_NUMBER_ID}/messages`,
      initialBody,
    );

    return response;
  }
}
