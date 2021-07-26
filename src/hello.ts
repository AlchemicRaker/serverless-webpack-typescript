import {APIGatewayProxyHandlerV2} from 'aws-lambda'

export const handler: APIGatewayProxyHandlerV2 = (event, context, callback) => {
    console.log(event.version);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from AWS lambda, serverless, and typescript!",
            stage: process.env.STAGE,
            proxy: event.pathParameters?.proxy,
            input: process.env.STAGE != "prod" ? event : undefined
        })
    });
};