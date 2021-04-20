// Fill in production environment variables like keys
const productionConfig = {
    webhookSigningKey: "something",
    awsRegion: null,
    mailgunTopicArn: "arn:aws:sns:us-east-2:318398543340:MailgunEvents",
    mailgunEventTable: "rawMailgunEvents",
};
export default productionConfig;
