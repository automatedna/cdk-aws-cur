# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReportDefinition <a name="ReportDefinition" id="@automatedna/cdk-aws-cur.ReportDefinition"></a>

- *Implements:* <a href="#@automatedna/cdk-aws-cur.IReportDefinition">IReportDefinition</a>

#### Initializers <a name="Initializers" id="@automatedna/cdk-aws-cur.ReportDefinition.Initializer"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

new ReportDefinition(scope: Construct, id: string, props: ReportDefinitionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.props">props</a></code> | <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps">ReportDefinitionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@automatedna/cdk-aws-cur.ReportDefinition.Initializer.parameter.props"></a>

- *Type:* <a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps">ReportDefinitionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@automatedna/cdk-aws-cur.ReportDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@automatedna/cdk-aws-cur.ReportDefinition.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@automatedna/cdk-aws-cur.ReportDefinition.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionArn">fromReportDefinitionArn</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionAttributes">fromReportDefinitionAttributes</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionName">fromReportDefinitionName</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@automatedna/cdk-aws-cur.ReportDefinition.isConstruct"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@automatedna/cdk-aws-cur.ReportDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@automatedna/cdk-aws-cur.ReportDefinition.isOwnedResource"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@automatedna/cdk-aws-cur.ReportDefinition.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@automatedna/cdk-aws-cur.ReportDefinition.isResource"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@automatedna/cdk-aws-cur.ReportDefinition.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromReportDefinitionArn` <a name="fromReportDefinitionArn" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionArn"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.fromReportDefinitionArn(scope: Construct, id: string, reportDefinitionArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionArn.parameter.id"></a>

- *Type:* string

---

###### `reportDefinitionArn`<sup>Required</sup> <a name="reportDefinitionArn" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionArn.parameter.reportDefinitionArn"></a>

- *Type:* string

---

##### `fromReportDefinitionAttributes` <a name="fromReportDefinitionAttributes" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionAttributes"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.fromReportDefinitionAttributes(scope: Construct, id: string, attrs: ReportAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionAttributes.parameter.attrs"></a>

- *Type:* <a href="#@automatedna/cdk-aws-cur.ReportAttributes">ReportAttributes</a>

---

##### `fromReportDefinitionName` <a name="fromReportDefinitionName" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionName"></a>

```typescript
import { ReportDefinition } from '@automatedna/cdk-aws-cur'

ReportDefinition.fromReportDefinitionName(scope: Construct, id: string, reportName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionName.parameter.id"></a>

- *Type:* string

---

###### `reportName`<sup>Required</sup> <a name="reportName" id="@automatedna/cdk-aws-cur.ReportDefinition.fromReportDefinitionName.parameter.reportName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.property.reportArn">reportArn</a></code> | <code>string</code> | The ARN of the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinition.property.reportName">reportName</a></code> | <code>string</code> | The name of the report. |

---

##### `node`<sup>Required</sup> <a name="node" id="@automatedna/cdk-aws-cur.ReportDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@automatedna/cdk-aws-cur.ReportDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@automatedna/cdk-aws-cur.ReportDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `reportArn`<sup>Required</sup> <a name="reportArn" id="@automatedna/cdk-aws-cur.ReportDefinition.property.reportArn"></a>

```typescript
public readonly reportArn: string;
```

- *Type:* string

The ARN of the report.

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@automatedna/cdk-aws-cur.ReportDefinition.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The name of the report.

---


## Structs <a name="Structs" id="Structs"></a>

### ReportAttributes <a name="ReportAttributes" id="@automatedna/cdk-aws-cur.ReportAttributes"></a>

#### Initializer <a name="Initializer" id="@automatedna/cdk-aws-cur.ReportAttributes.Initializer"></a>

```typescript
import { ReportAttributes } from '@automatedna/cdk-aws-cur'

const reportAttributes: ReportAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportAttributes.property.reportArn">reportArn</a></code> | <code>string</code> | The ARN of the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportAttributes.property.reportName">reportName</a></code> | <code>string</code> | The name of the report that you want to create. |

---

##### `reportArn`<sup>Optional</sup> <a name="reportArn" id="@automatedna/cdk-aws-cur.ReportAttributes.property.reportArn"></a>

```typescript
public readonly reportArn: string;
```

- *Type:* string

The ARN of the report.

---

##### `reportName`<sup>Optional</sup> <a name="reportName" id="@automatedna/cdk-aws-cur.ReportAttributes.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The name of the report that you want to create.

---

### ReportDefinitionProps <a name="ReportDefinitionProps" id="@automatedna/cdk-aws-cur.ReportDefinitionProps"></a>

#### Initializer <a name="Initializer" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.Initializer"></a>

```typescript
import { ReportDefinitionProps } from '@automatedna/cdk-aws-cur'

const reportDefinitionProps: ReportDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.reportName">reportName</a></code> | <code>string</code> | The name of the report that you want to create. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.s3Bucket">s3Bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket where AWS delivers the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.additionalArtifacts">additionalArtifacts</a></code> | <code><a href="#@automatedna/cdk-aws-cur.AdditionalArtifacts">AdditionalArtifacts</a>[]</code> | A list of manifests that you want AWS to create for this report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code><a href="#@automatedna/cdk-aws-cur.AdditionalSchemaElements">AdditionalSchemaElements</a>[]</code> | A list that indicates additional content that AWS includes in the report, such as individual resource IDs. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.compression">compression</a></code> | <code><a href="#@automatedna/cdk-aws-cur.Compression">Compression</a></code> | The compression format that Amazon Web Services uses for the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.format">format</a></code> | <code><a href="#@automatedna/cdk-aws-cur.Format">Format</a></code> | The format that Amazon Web Services uses for the report. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean</code> | Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.reportVersioning">reportVersioning</a></code> | <code><a href="#@automatedna/cdk-aws-cur.ReportVersioning">ReportVersioning</a></code> | Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions. |
| <code><a href="#@automatedna/cdk-aws-cur.ReportDefinitionProps.property.timeUnit">timeUnit</a></code> | <code><a href="#@automatedna/cdk-aws-cur.TimeUnit">TimeUnit</a></code> | The granularity of the line items in the report. |

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The name of the report that you want to create.

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The Amazon S3 bucket where AWS delivers the report.

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report.

Your prefix can't include spaces.

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: AdditionalArtifacts[];
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.AdditionalArtifacts">AdditionalArtifacts</a>[]
- *Default:* No additional artifacts

A list of manifests that you want AWS to create for this report.

---

##### `additionalSchemaElements`<sup>Optional</sup> <a name="additionalSchemaElements" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.additionalSchemaElements"></a>

```typescript
public readonly additionalSchemaElements: AdditionalSchemaElements[];
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.AdditionalSchemaElements">AdditionalSchemaElements</a>[]
- *Default:* No additional schema elements

A list that indicates additional content that AWS includes in the report, such as individual resource IDs.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.compression"></a>

```typescript
public readonly compression: Compression;
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.Compression">Compression</a>
- *Default:* Compression.GZIP

The compression format that Amazon Web Services uses for the report.

---

##### `format`<sup>Optional</sup> <a name="format" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.format"></a>

```typescript
public readonly format: Format;
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.Format">Format</a>
- *Default:* Format.TEXT_OR_CSV

The format that Amazon Web Services uses for the report.

---

##### `refreshClosedReports`<sup>Optional</sup> <a name="refreshClosedReports" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean;
```

- *Type:* boolean
- *Default:* true

Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months.

These
charges can include refunds, credits, or support fees.

---

##### `reportVersioning`<sup>Optional</sup> <a name="reportVersioning" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.reportVersioning"></a>

```typescript
public readonly reportVersioning: ReportVersioning;
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.ReportVersioning">ReportVersioning</a>
- *Default:* ReportVersioning.CREATE_NEW_REPORT

Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@automatedna/cdk-aws-cur.ReportDefinitionProps.property.timeUnit"></a>

```typescript
public readonly timeUnit: TimeUnit;
```

- *Type:* <a href="#@automatedna/cdk-aws-cur.TimeUnit">TimeUnit</a>
- *Default:* TimeUnit.HOURLY

The granularity of the line items in the report.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IReportDefinition <a name="IReportDefinition" id="@automatedna/cdk-aws-cur.IReportDefinition"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@automatedna/cdk-aws-cur.ReportDefinition">ReportDefinition</a>, <a href="#@automatedna/cdk-aws-cur.IReportDefinition">IReportDefinition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.IReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@automatedna/cdk-aws-cur.IReportDefinition.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@automatedna/cdk-aws-cur.IReportDefinition.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@automatedna/cdk-aws-cur.IReportDefinition.property.reportArn">reportArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.IReportDefinition.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@automatedna/cdk-aws-cur.IReportDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@automatedna/cdk-aws-cur.IReportDefinition.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@automatedna/cdk-aws-cur.IReportDefinition.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `reportArn`<sup>Required</sup> <a name="reportArn" id="@automatedna/cdk-aws-cur.IReportDefinition.property.reportArn"></a>

```typescript
public readonly reportArn: string;
```

- *Type:* string

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@automatedna/cdk-aws-cur.IReportDefinition.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### AdditionalArtifacts <a name="AdditionalArtifacts" id="@automatedna/cdk-aws-cur.AdditionalArtifacts"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.AdditionalArtifacts.REDSHIFT">REDSHIFT</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.AdditionalArtifacts.QUICKSIGHT">QUICKSIGHT</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.AdditionalArtifacts.ATHENA">ATHENA</a></code> | *No description.* |

---

##### `REDSHIFT` <a name="REDSHIFT" id="@automatedna/cdk-aws-cur.AdditionalArtifacts.REDSHIFT"></a>

---


##### `QUICKSIGHT` <a name="QUICKSIGHT" id="@automatedna/cdk-aws-cur.AdditionalArtifacts.QUICKSIGHT"></a>

---


##### `ATHENA` <a name="ATHENA" id="@automatedna/cdk-aws-cur.AdditionalArtifacts.ATHENA"></a>

---


### AdditionalSchemaElements <a name="AdditionalSchemaElements" id="@automatedna/cdk-aws-cur.AdditionalSchemaElements"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.AdditionalSchemaElements.RESOURCES">RESOURCES</a></code> | *No description.* |

---

##### `RESOURCES` <a name="RESOURCES" id="@automatedna/cdk-aws-cur.AdditionalSchemaElements.RESOURCES"></a>

---


### Compression <a name="Compression" id="@automatedna/cdk-aws-cur.Compression"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.Compression.GZIP">GZIP</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.Compression.ZIP">ZIP</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.Compression.PARQUET">PARQUET</a></code> | *No description.* |

---

##### `GZIP` <a name="GZIP" id="@automatedna/cdk-aws-cur.Compression.GZIP"></a>

---


##### `ZIP` <a name="ZIP" id="@automatedna/cdk-aws-cur.Compression.ZIP"></a>

---


##### `PARQUET` <a name="PARQUET" id="@automatedna/cdk-aws-cur.Compression.PARQUET"></a>

---


### Format <a name="Format" id="@automatedna/cdk-aws-cur.Format"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.Format.TEXT_OR_CSV">TEXT_OR_CSV</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.Format.PARQUET">PARQUET</a></code> | *No description.* |

---

##### `TEXT_OR_CSV` <a name="TEXT_OR_CSV" id="@automatedna/cdk-aws-cur.Format.TEXT_OR_CSV"></a>

---


##### `PARQUET` <a name="PARQUET" id="@automatedna/cdk-aws-cur.Format.PARQUET"></a>

---


### ReportVersioning <a name="ReportVersioning" id="@automatedna/cdk-aws-cur.ReportVersioning"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.ReportVersioning.CREATE_NEW_REPORT">CREATE_NEW_REPORT</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.ReportVersioning.OVERWRITE_REPORT">OVERWRITE_REPORT</a></code> | *No description.* |

---

##### `CREATE_NEW_REPORT` <a name="CREATE_NEW_REPORT" id="@automatedna/cdk-aws-cur.ReportVersioning.CREATE_NEW_REPORT"></a>

---


##### `OVERWRITE_REPORT` <a name="OVERWRITE_REPORT" id="@automatedna/cdk-aws-cur.ReportVersioning.OVERWRITE_REPORT"></a>

---


### TimeUnit <a name="TimeUnit" id="@automatedna/cdk-aws-cur.TimeUnit"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@automatedna/cdk-aws-cur.TimeUnit.DAILY">DAILY</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.TimeUnit.HOURLY">HOURLY</a></code> | *No description.* |
| <code><a href="#@automatedna/cdk-aws-cur.TimeUnit.MONTHLY">MONTHLY</a></code> | *No description.* |

---

##### `DAILY` <a name="DAILY" id="@automatedna/cdk-aws-cur.TimeUnit.DAILY"></a>

---


##### `HOURLY` <a name="HOURLY" id="@automatedna/cdk-aws-cur.TimeUnit.HOURLY"></a>

---


##### `MONTHLY` <a name="MONTHLY" id="@automatedna/cdk-aws-cur.TimeUnit.MONTHLY"></a>

---

