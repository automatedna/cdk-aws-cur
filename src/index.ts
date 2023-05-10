import {
  aws_cur as cur,
  IResource,
  Resource,
  aws_s3 as s3,
  Stack,
  Arn,
  ArnFormat,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface IReportDefinition extends IResource {
  readonly reportName: string;
  readonly reportArn: string;
}

abstract class ReportDefinitionBase extends Resource implements IReportDefinition {
  public abstract readonly reportName: string;
  public abstract readonly reportArn: string;
}

export enum AdditionalSchemaElements {
  RESOURCES = 'RESOURCES',
  SPLIT_COST_ALLOCATION_DATA = 'SPLIT_COST_ALLOCATION_DATA',
}

export enum Compression {
  GZIP = 'GZIP',
  ZIP = 'ZIP',
  PARQUET = 'Parquet',
}

export enum Format {
  TEXT_OR_CSV = 'textORcsv',
  PARQUET = 'Parquet',
}

export enum TimeUnit {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
  MONTHLY = 'MONTHLY',
}

export enum AdditionalArtifacts {
  REDSHIFT = 'REDSHIFT',
  QUICKSIGHT = 'QUICKSIGHT',
  ATHENA = 'ATHENA',
}

export enum ReportVersioning {
  CREATE_NEW_REPORT = 'CREATE_NEW_REPORT',
  OVERWRITE_REPORT = 'OVERWRITE_REPORT',
}

export interface ReportAttributes {
  /**
   * The name of the report that you want to create.
   */
  readonly reportName?: string;
  /**
   * The ARN of the report.
   */
  readonly reportArn?: string;
}

export interface ReportDefinitionProps {
  /**
   * A list that indicates additional content that AWS includes in the report, such as individual resource IDs.
   *
   * @default - No additional schema elements
   */
  readonly additionalSchemaElements?: AdditionalSchemaElements[];
  /**
   * The compression format that Amazon Web Services uses for the report.
   *
   * @default - Compression.GZIP
   */
  readonly compression?: Compression;
  /**
   * The format that Amazon Web Services uses for the report.
   *
   * @default - Format.TEXT_OR_CSV
   */
  readonly format?: Format;
  /**
   * The name of the report that you want to create.
   */
  readonly reportName: string;
  /**
   * The granularity of the line items in the report.
   *
   * @default - TimeUnit.HOURLY
   */
  readonly timeUnit?: TimeUnit;
  /**
   * A list of manifests that you want AWS to create for this report.
   *
   * @default - No additional artifacts
   */
  readonly additionalArtifacts?: AdditionalArtifacts[];
  /**
   * Whether you want AWS to update your reports after they have been
   * finalized if AWS detects charges related to previous months. These
   * charges can include refunds, credits, or support fees.
   *
   * @default - true
   */
  readonly refreshClosedReports?: boolean;
  /**
   * Whether you want AWS to overwrite the previous version of each report
   * or to deliver the report in addition to the previous versions.
   *
   * @default - ReportVersioning.CREATE_NEW_REPORT
   */
  readonly reportVersioning?: ReportVersioning;
  /**
   * The prefix that Amazon Web Services adds to the report name when Amazon
   * Web Services delivers the report. Your prefix can't include spaces.
   */
  readonly s3Prefix: string;
  /**
   * The Amazon S3 bucket where AWS delivers the report.
   */
  readonly s3Bucket: s3.IBucket;
}

export class ReportDefinition extends ReportDefinitionBase {
  public static fromReportDefinitionArn(scope: Construct, id: string, reportDefinitionArn: string): IReportDefinition {
    return ReportDefinition.fromReportDefinitionAttributes(scope, id, { reportArn: reportDefinitionArn });
  }

  public static fromReportDefinitionName(scope: Construct, id: string, reportName: string): IReportDefinition {
    return ReportDefinition.fromReportDefinitionAttributes(scope, id, { reportName });
  }

  public static fromReportDefinitionAttributes(scope: Construct, id: string, attrs: ReportAttributes): IReportDefinition {
    if (!attrs.reportName && !attrs.reportArn) {
      throw new Error('Either ReportName or ReportArn is required to import a ReportDefinition');
    }

    class Import extends ReportDefinitionBase {
      reportName = attrs.reportName ?? '';
      reportArn = attrs.reportArn ?? '';
    }

    const report = new Import(scope, id);

    const stack = Stack.of(scope);

    if (attrs.reportArn && !attrs.reportName) {
      report.reportName = Arn.split(attrs.reportArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName as string;
    }

    if (attrs.reportName && !attrs.reportArn) {
      report.reportArn = stack.formatArn({
        service: 'cur',
        resource: 'ReportDefinition',
        resourceName: report.reportName,
      });
    }

    return report;
  }

  /**
   * The name of the report.
   */
  public readonly reportName: string;
  /**
   * The ARN of the report.
   */
  public readonly reportArn: string;

  constructor(scope: Construct, id: string, props: ReportDefinitionProps) {
    super(scope, id, { physicalName: props.reportName });

    if (props.additionalArtifacts?.includes(AdditionalArtifacts.ATHENA)) {
      if (props.reportVersioning !== ReportVersioning.OVERWRITE_REPORT) {
        throw new Error('If ATHENA is chosen for additionalArtifacts, reportVersioning must be OVERWRITE_REPORT');
      }
    }

    if (props.format === Format.PARQUET || props.compression === Compression.PARQUET) {
      if (props.format !== Format.PARQUET || props.compression !== Compression.PARQUET) {
        throw new Error('If format or compression is Parquet, they must both be Parquet');
      }
    }

    if (props.s3Prefix && props.s3Prefix.includes(' ')) {
      throw new Error('s3Prefix must not contain spaces');
    }

    if (!props.reportName.match(/^[0-9A-Za-z!\-_.*'()]+$/) || props.reportName.length > 256) {
      throw new Error('reportName must match the regex ^[0-9A-Za-z!\-_.*\'()]+$ and be no longer than 256 characters');
    }

    if (props.additionalArtifacts != undefined) {
      if ((props.additionalArtifacts.includes(AdditionalArtifacts.QUICKSIGHT) ||
        props.additionalArtifacts.includes(AdditionalArtifacts.REDSHIFT)) &&
        props.compression !== Compression.GZIP) {
        throw new Error('If QuickSight or Redshift artifacts are selected you must select GZIP compression');
      }

      if (props.additionalArtifacts.includes(AdditionalArtifacts.ATHENA) &&
        (props.additionalArtifacts.length > 1)) {
        throw new Error('If Athena artifact is selected you cant select any other artifact type at the same time');
      }

      if (props.additionalArtifacts.includes(AdditionalArtifacts.ATHENA) &&
        props.reportVersioning !== ReportVersioning.OVERWRITE_REPORT) {
        throw new Error('If Athena artifact is selected report versioning must use OVERWRITE_REPORT');
      }
    }

    const s3Region = Stack.of(props.s3Bucket).region;

    new cur.CfnReportDefinition(this, 'ReportDefinition', {
      compression: props.compression ?? Compression.GZIP,
      format: props.format ?? Format.TEXT_OR_CSV,
      refreshClosedReports: props.refreshClosedReports ?? true,
      reportName: props.reportName,
      reportVersioning: props.reportVersioning ?? ReportVersioning.CREATE_NEW_REPORT,
      s3Bucket: props.s3Bucket.bucketName,
      s3Prefix: props.s3Prefix,
      s3Region,
      timeUnit: props.timeUnit ?? TimeUnit.HOURLY,
      additionalArtifacts: props.additionalArtifacts,
      additionalSchemaElements: props.additionalSchemaElements,
    });

    this.reportName = props.reportName;
    this.reportArn = Stack.of(this).formatArn({
      service: 'cur',
      resource: 'ReportDefinition',
      resourceName: this.reportName,
    });
  }
}
