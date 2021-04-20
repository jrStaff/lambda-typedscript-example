import crypto, { KeyObject } from "crypto";
import getConfig from "../../config/config";
import Input from "../../ports/input";
import MailgunEvent from "../../domain/models/mailgunEvent";

export default class MailgunInput implements Input {
  private webhookSigningKey?: crypto.KeyObject;

  constructor() {
    this.webhookSigningKey = crypto.createSecretKey(getConfig().webhookSigningKey);
  }

  public processMailgunData(data: any): MailgunEvent {
    if (!this.verifyEncoding(data)) {
      throw new Error("Mailgun encoding verification failed.");
    }
    return this.parse(data);
  }

  private verifyEncoding({ timestamp, token, signature }): boolean  {
    const encodedToken = crypto
        .createHmac("sha256", this.webhookSigningKey)
        .update(timestamp.concat(token))
        .digest("hex");

    return (encodedToken === signature);
  }

  private parse(data: any): MailgunEvent {
      const timestamp: number = data["event-data"].timestamp;
      const type: string = data["event-data"].event;
      return new MailgunEvent(type, timestamp);
  }
}
