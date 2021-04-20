import Model from "./model";

export default class MailgunEvent implements Model {
    public type: string;
    public timestamp: number;
    public provider: string;

    constructor(type: string, timestamp: number) {
        this.type = type;
        this.timestamp = timestamp;
        this.provider = "Mailgun";
    }
}
