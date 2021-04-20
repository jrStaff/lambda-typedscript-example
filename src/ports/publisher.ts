import MailgunEvent from "../domain/models/mailgunEvent";

export default interface Publisher {
    publish(mailgunEvent: MailgunEvent): Promise<void>;
}
