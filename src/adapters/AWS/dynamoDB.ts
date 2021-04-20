import AWS from "aws-sdk";
import PersistantStorage from "../../ports/persistantStorage";

class DynamoDB implements PersistantStorage {
    public tableName: string;
    public DynamoDB: AWS.DynamoDB;

    constructor(tableName: string) {
        this.tableName = tableName;
        this.DynamoDB = new AWS.DynamoDB();
    }

    public storeRawMailgun(data: object): Promise<void> {
        const primaryId = data["event-data"].id;
        const params = {
            TableName: this.tableName,
            Item: {
                id: {S: primaryId},
                data: {S: JSON.stringify(data)},
            },
        };

        return this.DynamoDB.putItem(params).promise();
    }
}

export default DynamoDB;
