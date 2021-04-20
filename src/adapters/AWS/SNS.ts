import AWS from "aws-sdk";
import MailgunEvent from "../../domain/models/MailgunEvent";
import Publisher from "../../ports/publisher";

class SNS implements Publisher {
    public topicArn: string;
    public SNS: AWS.SNS;

    constructor(topicArn: string) {
        this.topicArn = topicArn;
        this.SNS = new AWS.SNS();
    }

    public publish(mailgunEvent: MailgunEvent): Promise<void> {
        const event = {
            Message: JSON.stringify(mailgunEvent),
            TopicArn: this.topicArn,
        };

        return this.SNS.publish(event).promise();
    }
}

export default SNS;
