"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DbDataSource.dataSourceName = 'db';
DbDataSource.defaultConfig = config;
DbDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.db', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbDataSource);
exports.DbDataSource = DbDataSource;
//# sourceMappingURL=db.datasource.js.map