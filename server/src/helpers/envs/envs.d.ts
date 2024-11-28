declare namespace NodeJS {
  interface ProcessEnv {
    AWS_ACCOUNT_ID: string;
    GITHUB_REF_NAME: string;
    STACK_NAME: string;
    AWS_REGION: string;
    STAGE: string;
    MONGO_URI: string;
    S3_BUCKET_NAME: string;
  }
}