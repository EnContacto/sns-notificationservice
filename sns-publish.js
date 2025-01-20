import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";


const snsClient = new SNSClient({ region: "us-east-1" });

const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:068909597979:SNSAuth";

export const handler = async () => {
    try {
        
        const authCode = Math.floor(10000 + Math.random() * 90000);  
        const message = `Your authentication code is: ${authCode}`;
        const params = {
            Message: message,
            TopicArn: SNS_TOPIC_ARN,
        };
        await snsClient.send(new PublishCommand(params));

        console.log("Message sent successfully:", message);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Message sent successfully to SNS topic",
                authCode: authCode,
            }),
        };
    } catch (error) {
        console.error("Error sending message:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to send message",
                error: error.message,
            }),
        };
    }
};
