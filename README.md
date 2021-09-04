## Description

[Nest](https://github.com/nestjs/nest) application with logging. 

Steps:

1. Create an instance of BunyanLoggerService with Seq as custom stream in main.ts file
2. Inject the Logger from @nestjs/common and log your messages
3. Example of a log with data:

```
this.logger.warn('{user} tried access the {service} service with an expired key!',{ user: 'E73882', service: 'PurchaseOrder'});
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
