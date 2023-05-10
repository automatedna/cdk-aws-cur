# Cost and Usage Reporting Construct for AWS CDK

[![build](https://github.com/automatedna/cdk-aws-cur/actions/workflows/build.yml/badge.svg)](https://github.com/automatedna/cdk-aws-cur//workflows/build.yml)

## Features

- Create a Cost and Usage Report

## API Doc

See [API](API.md)

## References

- [AWS CDK Construct design guidelines](https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md)
- [AWS Cost and Usage Reporting API](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Operations_AWS_Cost_and_Usage_Report_Service.html)
- [Cloudformation's AWS::CUR::ReportDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html)
- [AWS CDK's CfnReportDefinition](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cur.CfnReportDefinition.html)

## Example

```typescript
import * as cur from '@automatedna/cdk-aws-cur';
import {
  Stack,
  StackProps,
  aws_s3 as s3,
  Duration,
  aws_iam as iam,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CurStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Create a bucket for storing reports
    const bucket = new s3.Bucket(this, 'bucket', {});

    // Add the required resource policy statements for CUR to write reports to the bucket
    const conditions = {
      StringEquals: {
        'aws:SourceArn': `arn:aws:cur:${this.region}:${this.account}:definition/*`,
        'aws:SourceAccount': this.account,
      },
    };

    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: [
          's3:GetBucketAcl',
          's3:GetBucketPolicy',
        ],
        resources: [
          bucket.bucketArn,
        ],
        principals: [
          new iam.ServicePrincipal('billingreports.amazonaws.com'),
        ],
        conditions,
      }),
    );

    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: [
          's3:PutObject',
        ],
        resources: [
          `${bucket.bucketArn}/*`,
        ],
        principals: [
          new iam.ServicePrincipal('billingreports.amazonaws.com'),
        ],
        conditions,
      }),
    );

    // Create the report definition
    new cur.ReportDefinition(this, 'CostAndUsageReport', {
      reportName: 'ExampleCostAndUsageReport',
      s3Bucket: bucket,
      s3Prefix: 'cur',
      compression: cur.Compression.PARQUET,
      format: cur.Format.PARQUET,
      additionalSchemaElements: [
        cur.AdditionalSchemaElements.RESOURCES,
      ],
      reportVersioning: cur.ReportVersioning.OVERWRITE_REPORT,
      refreshClosedReports: true,
    });
  }
}
```
