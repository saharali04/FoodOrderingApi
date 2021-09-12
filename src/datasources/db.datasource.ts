import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb+srv://readWrite:93gEgx99ovxC1Lys@cluster0.oe2cj.mongodb.net/food-ordering-app?retryWrites=true&w=majority',
  host: 'cluster0.oe2cj.mongodb.net',
  port: 0,
  user: 'readWrite',
  password: '93gEgx99ovxC1Lys',
  database: 'food-ordering-app',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
