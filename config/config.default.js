'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554829968072_8886';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // Sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'indie_crafted_dev',
    operatorsAliases: false,
    freezeTableName: true,
  };

  // egg-validate
  config.validate = {
    convert: true,
  };

  config.security = {
    xframe: { enable: false },
    csrf: { enable: false },
    domainWhiteList: [ 'http://localhost:8080', 'http://localhost:8081' ],
  };

  return config;
};
