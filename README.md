# sns-notificationservice
 Function Lambda in Node.js 
# AWS Lambda Function - Send Authentication Code via SNS

This AWS Lambda function sends a 5-digit authentication code to email and mobile phone numbers subscribed to an SNS topic. The function is written in **Node.js 22** and utilizes the AWS SDK v3.

## How It Works


1. The code is sent to an **AWS SNS topic**.
2. The SNS topic delivers the message to all subscribed email addresses and phone numbers.

## Requirements

Before deploying and running the function, ensure you have the following:

- An **AWS SNS topic** created and set up in the AWS Console.
- Subscribed email addresses and phone numbers confirmed in the SNS topic.
- AWS CLI installed (optional for deployment via CLI).
- AWS Lambda function set up with Node.js 22 runtime.
- Proper IAM permissions to allow the Lambda function to publish to SNS.

## Deployment Steps

Follow these steps to deploy and configure the function in AWS Lambda:

### Step 1: Create an SNS Topic

1. Go to the AWS Management Console.
2. Navigate to **Amazon SNS** > **Topics**.
3. Click **Create topic**, choose **Standard**, and provide a name.
4. After creation, copy the topic's ARN (e.g., `arn:aws:sns:us-east-1:068909xxxxx:SNSAuth`).

### Step 2: Add Subscriptions to SNS Topic

1. In the AWS SNS console, select the topic.
2. Go to the **Subscriptions** tab and click **Create subscription**.
3. Choose **Email** or **SMS** as the protocol.
4. Enter the email address or phone number.
5. Confirm the email or SMS by following the verification link sent to the email/SMS.