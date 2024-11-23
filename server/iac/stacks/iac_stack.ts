import {
  Stack,
  StackProps,
  aws_iam as iam,
  aws_cloudwatch as cloudwatch,
  aws_sns as sns,
  aws_cloudwatch_actions as actions,
  Duration,
  CfnOutput,
  SecretValue,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack } from './lambda_stack';
import { envs as environments } from '../../src/helpers/envs';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';

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
      'STAGE': stage
    };

    new LambdaStack(this, envs);
    
  }
}