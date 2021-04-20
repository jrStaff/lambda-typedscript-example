import Input from "../ports/input";
import PersistantStorage from "../ports/persistantStorage";
import Publisher from "../ports/publisher";
import MailgunEvent from "./models/MailgunEvent";

export default class MailgunEventHandler {
    public storage ?: PersistantStorage;
    public publisher ?: Publisher;
    public input: Input;

    constructor(storage: PersistantStorage = null,  publisher: Publisher = null, input: Input) {
        this.storage = storage;
        this.publisher = publisher;
        this.input = input;
    }

    public async handle(rawMailgunEvent: object): Promise<any> {
        const promises: Array<Promise<any>> = [];

        if (this.storage !== null) { promises.push(this.storage.storeRawMailgun(rawMailgunEvent)); }

        const mailgunEvent: MailgunEvent = this.input.processMailgunData(rawMailgunEvent);

        if (this.publisher !== null) { promises.push(this.publisher.publish(mailgunEvent)); }

        return Promise.all(promises);
    }
}
