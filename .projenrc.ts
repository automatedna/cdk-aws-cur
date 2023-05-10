import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Brandon Miller',
  authorAddress: 'devops@automatedna.com',
  cdkVersion: '2.78.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@automatedna/cdk-aws-cur',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/automatedna/cdk-aws-cur.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
    'aws-billing',
    'aws-cur',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: javascript.UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  stale: false,
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  eslint: true,
});
project.synth();
