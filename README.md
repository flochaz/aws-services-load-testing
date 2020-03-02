# aws-services-load-testing

Built using [serverless-artillery](https://github.com/Nordstrom/serverless-artillery) and patched with [sigv4 fix](https://github.com/Nordstrom/artillery-plugin-aws-sigv4/pull/14#issuecomment-518870881), this repo enable you to load test any AWS service that has a public endpoint (will work on intra VPC use case soon).

## Usage

check [serverless-artillery doc](https://github.com/Nordstrom/serverless-artillery) for more details but basically:

```
 slsart deploy 
 slsart invoke
 ```
