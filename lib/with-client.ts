import * as AWS from 'aws-sdk'

AWS.config.region = 'us-east-1'

export default async function withoutClient() {
  const params = {
    TableName: 'formula1',
    KeyConditionExpression: 'pk = :pk and begins_with(sk, :sk)',
    ExpressionAttributeValues: {
      ':pk': 'driver#leclerc',
      ':sk': 'spa'
    }
  };

  const documentClient = new AWS.DynamoDB.DocumentClient();

  let result;
  try {
    result = documentClient.query(params).promise();
    return result;
  } catch(err) {
    console.error(`failed client call with ${params}, error: ${err}`);
    throw new Error('Unable to process request');
  }
}