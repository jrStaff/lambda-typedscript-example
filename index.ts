import DynamoDB from 'src/adapters/AWS/dynamoDB';
import SNS from 'src/adapters/AWS/SNS';
import MailgunInput from 'src/adapters/mailgun/mailgun';
import getConfig from 'src/config/config';
import MailgunEventHandler from './src/domain/mailgunEventHandler';

const mailgunEventHandler = new MailgunEventHandler(
  new DynamoDB(getConfig().mailgunEventTable),
  new SNS(getConfig().mailgunTopicArn),
  new MailgunInput(),
);

exports.mailgunEventHandler = async (event: any) => {
  let response = {};
  try {
    await mailgunEventHandler.handle(event);
    response = {
      statusCode: 200,
      body: `Successfully processed Mailgun Event!`,
    };
  }
  catch (e) {
      response = formatError(e);
  } finally {
    return response;
  }
};


const formatError = function(error){
  return {
    "statusCode": error.statusCode,
    "headers": {
      "Content-Type": "text/plain",
      "x-amzn-ErrorType": error.code
    },
    "isBase64Encoded": false,
    "body": error.code + ": " + error.message
  }
}