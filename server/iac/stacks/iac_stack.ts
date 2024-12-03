import {
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack } from './lambda_stack';
import { envs as environments } from '../../src/helpers/envs';
import { S3Stack } from './s3_stack';
import { CloudFrontStack } from './cloudfront_stack';
import * as iam from 'aws-cdk-lib/aws-iam';

export class IacStack extends Stack {
  constructor(scope: Construct, constructId: string, props?: StackProps) {
    super(scope, constructId, props);
    const githubRef = environments.GITHUB_REF || '';

    let stage;
    if (githubRef.includes('prod')) {
      stage = 'PROD';
    } else if (githubRef.includes('homolog')) {
      stage = 'HOMOLOG';
    } else if (githubRef.includes('dev')) {
      stage = 'DEV';
    } else {
      stage = 'TEST';
    }

    const envs = {
      'STAGE': stage,
      'MONGO_URI': environments.MONGO_URI,
      'S3_BUCKET_NAME': environments.S3_BUCKET_NAME,
    };

    const lambdaStack = new LambdaStack(this, envs);

    
    const bucket = new S3Stack(this, `${environments.STACK_NAME}-Bucket-${stage}`);

    const s3Policy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      resources: [
        bucket.bucket.bucketArn,
        `${bucket.bucket.bucketArn}/*`
      ],
    });
    
    lambdaStack.lambdaFunction.addToRolePolicy(s3Policy);

    new CloudFrontStack(this, `${environments.STACK_NAME}-CloudFront-${stage}`, bucket.bucket);
    
  }
}