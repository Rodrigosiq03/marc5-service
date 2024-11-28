import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { envs } from "../../src/helpers/envs";
import { stage } from "../get_stage_env";

export class CloudFrontStack extends Construct {
  constructor(scope: Construct, id: string, s3Stack: Bucket) {
    super(scope, id);

    const originAccessIdentity = new OriginAccessIdentity(this, `${envs.STACK_NAME}-OAI-${stage}`, {
      comment: 'OAI for S3 bucket',
    });
    
    const distribution = new Distribution(this, `${envs.STACK_NAME}-Distribution-${stage}`, {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.S3Origin(s3Stack, {
          originAccessIdentity: originAccessIdentity,
        }),
        allowedMethods: cdk.aws_cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachedMethods: cdk.aws_cloudfront.CachedMethods.CACHE_GET_HEAD,
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
    });
    
    distribution.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
    
    s3Stack.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      resources: [s3Stack.arnForObjects('*')],
      principals: [new iam.ServicePrincipal('cloudfront.amazonaws.com', {
        conditions: {
          StringEquals: {
            'AWS:SourceArn': `arn:aws:cloudfront::${envs.AWS_ACCOUNT_ID}:distribution/${distribution.distributionId}`,
          },
        },
      })],
    }));
  }

  
}