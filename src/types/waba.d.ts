interface WhatsAppWebhookPayload {
  object: string;
  entry: WhatsAppWebhookEntry[];
}

interface WhatsAppWebhookEntry {
  id: string;
  changes: WhatsAppWebhookChange[];
}

interface WhatsAppWebhookChange {
  value: WhatsAppWebhookValue;
  field: string;
}

interface WhatsAppWebhookValue {
  messaging_product: string;
  metadata: WhatsAppWebhookMetadata;
  contacts: WhatsAppWebhookContact[];
  messages: WhatsAppWebhookMessage[];
}

interface WhatsAppWebhookMetadata {
  display_phone_number: string;
  phone_number_id: string;
}

interface WhatsAppWebhookContact {
  profile: WhatsAppWebhookProfile;
  wa_id: string;
}

interface WhatsAppWebhookProfile {
  name: string;
}

interface WhatsAppWebhookMessage {
  from: string;
  id: string;
  type: string;
  text?: WhatsAppWebhookText;
  button?: WhatsAppWebhookButton;
  image?: WhatsAppWebhookImage;
  timestamp: string;
}

interface WhatsAppWebhookText {
  body: string;
}

interface WhatsAppWebhookButton {
  text: string;
  payload: string;
}

interface WhatsAppWebhookImage {
  id: string;
  mime_type: string;
  sha256: string;
}
