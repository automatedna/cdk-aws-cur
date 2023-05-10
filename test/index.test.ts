import {
  App,
  Stack,
  aws_s3 as s3,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  ReportDefinition,
  ReportDefinitionProps,
  Compression,
  Format,
  TimeUnit,
  AdditionalSchemaElements,
  AdditionalArtifacts,
  ReportVersioning,
} from '../src/index';

const defaultProps: ReportDefinitionProps = {
  additionalSchemaElements: [AdditionalSchemaElements.RESOURCES],
  compression: Compression.GZIP,
  format: Format.TEXT_OR_CSV,
  reportName: 'TestReport',
  timeUnit: TimeUnit.DAILY,
  s3Prefix: 'test',
  s3Bucket: new s3.Bucket(new Stack(), 'TestBucket'),
};

test('should create a report definition without errors', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition', defaultProps);
  }).not.toThrow();
});

test('should throw an error when ATHENA is chosen for additionalArtifacts and reportVersioning is not OVERWRITE_REPORT', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props: ReportDefinitionProps = {
    ...defaultProps,
    additionalArtifacts: [AdditionalArtifacts.ATHENA],
    reportVersioning: ReportVersioning.CREATE_NEW_REPORT,
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition', props);
  }).toThrow('If ATHENA is chosen for additionalArtifacts, reportVersioning must be OVERWRITE_REPORT');
});

test('should throw an error when format or compression is Parquet and they are not both Parquet', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props1: ReportDefinitionProps = {
    ...defaultProps,
    format: Format.PARQUET,
  };

  const props2: ReportDefinitionProps = {
    ...defaultProps,
    compression: Compression.PARQUET,
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition1', props1);
  }).toThrow('If format or compression is Parquet, they must both be Parquet');

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition2', props2);
  }).toThrow('If format or compression is Parquet, they must both be Parquet');
});

test('should throw an error when s3Prefix contains spaces', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props: ReportDefinitionProps = {
    ...defaultProps,
    s3Prefix: 'report prefix/with space',
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition', props);
  }).toThrow('s3Prefix must not contain spaces');
});

test('should create a report definition using fromReportDefinitionArn', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const arn = 'arn:aws:cur:us-east-1:123456789012:reportdefinition/TestReport';

  const importedReportDefinition = ReportDefinition.fromReportDefinitionArn(stack, 'ImportedReportDefinition', arn);

  expect(importedReportDefinition.reportName).toEqual('TestReport');
  expect(importedReportDefinition.reportArn).toEqual(arn);
});

test('should create a report definition using fromReportDefinitionName', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const name = 'TestReport';

  const importedReportDefinition = ReportDefinition.fromReportDefinitionName(stack, 'ImportedReportDefinition', name);

  expect(importedReportDefinition.reportName).toEqual(name);
  expect(importedReportDefinition.reportArn).toContain(name);
});

test('should throw error when no name or arn is provided to fromReportDefinitionAttributes', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    ReportDefinition.fromReportDefinitionAttributes(stack, 'ImportedReportDefinition', {});
  }).toThrow('Either ReportName or ReportArn is required to import a ReportDefinition');
});

test('should create a stack with AWS::CUR::ReportDefinition resource and appropriate properties', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const bucket = new s3.Bucket(stack, 'TestBucket');

  new ReportDefinition(stack, 'ReportDefinition', {
    ... defaultProps,
    s3Bucket: bucket,
  });

  Template.fromStack(stack).hasResourceProperties('AWS::CUR::ReportDefinition', {
    AdditionalSchemaElements: defaultProps.additionalSchemaElements,
    Compression: defaultProps.compression,
    Format: defaultProps.format,
    ReportName: defaultProps.reportName,
    TimeUnit: defaultProps.timeUnit,
    S3Prefix: defaultProps.s3Prefix,
  });
});

test('should throw an error when reportName contains invalid characters or exceeds the character limit', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props1: ReportDefinitionProps = {
    ...defaultProps,
    reportName: 'Invalid Report Name',
  };

  const props2: ReportDefinitionProps = {
    ...defaultProps,
    reportName: 'a'.repeat(257),
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition1', props1);
  }).toThrow("reportName must match the regex ^[0-9A-Za-z!-_.*'()]+$ and be no longer than 256 characters");

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition2', props2);
  }).toThrow("reportName must match the regex ^[0-9A-Za-z!-_.*'()]+$ and be no longer than 256 characters");
});

test('should throw an error when QuickSight or Redshift artifacts are selected and GZIP compression is not selected', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props: ReportDefinitionProps = {
    ...defaultProps,
    additionalArtifacts: [AdditionalArtifacts.QUICKSIGHT, AdditionalArtifacts.REDSHIFT],
    compression: Compression.ZIP,
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition', props);
  }).toThrow('If QuickSight or Redshift artifacts are selected you must select GZIP compression');
});

test('should throw an error when Athena artifact is selected and other artifact types are selected or report versioning is not OVERWRITE_REPORT', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const props1: ReportDefinitionProps = {
    ...defaultProps,
    additionalArtifacts: [AdditionalArtifacts.ATHENA, AdditionalArtifacts.QUICKSIGHT],
    reportVersioning: ReportVersioning.OVERWRITE_REPORT,
  };

  const props2: ReportDefinitionProps = {
    ...defaultProps,
    additionalArtifacts: [AdditionalArtifacts.ATHENA],
    reportVersioning: ReportVersioning.CREATE_NEW_REPORT,
  };

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition1', props1);
  }).toThrow('If Athena artifact is selected you cant select any other artifact type at the same time');

  expect(() => {
    new ReportDefinition(stack, 'ReportDefinition2', props2);
  }).toThrow('If ATHENA is chosen for additionalArtifacts, reportVersioning must be OVERWRITE_REPORT');
});
