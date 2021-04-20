import MailgunEvent from "src/domain/models/MailgunEvent";
import Model from "../domain/models/model";

export default interface Input {
    processMailgunData(rawMailgunData: any): MailgunEvent;
}
