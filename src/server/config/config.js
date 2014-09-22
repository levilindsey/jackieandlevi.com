var fs = require('fs'),
    secureConfig = require('./secure-config'),
    path = require('path'),

    config = {};

config.environment = 'development';

config.db = {};

// Merge in the secure configuration data
config.app = secureConfig.app;

config.app.port = 3000;
config.app.url = 'http://localhost:' + config.app.port;

// Locations of some important files
config.app.projectRootPath = path.resolve(__dirname + '/../../..');
config.app.srcPath = config.app.projectRootPath + '/src';
config.app.appsPath = config.app.srcPath + '/apps';
config.app.homePath = config.app.appsPath + '/home';
config.app.pageMissingPath = config.app.appsPath + '/page-missing';
config.app.bowerComponentsPath = config.app.projectRootPath + '/bower_components';
config.app.faviconPath = config.app.homePath + '/public/images/favicon.ico';

config.app.cacheMaxAge = 2592000000;

config.app.apps = fs.readdirSync(config.app.appsPath);

// Mode-specific parameters
switch (config.environment) {
  case 'development':
    config.app.port = 3001;
    config.app.url = 'http://localhost:' + config.app.port;

    config.db.port = '27017';
    config.db.url = 'mongodb://localhost/jackieandlevi';
    break;
  case 'staging':
    config.app.port = process.env.PORT || 3001;
    config.app.url = 'http://jackieandlevi.com:' + config.app.port;

    // TODO: set up the actual db params
    config.db.port = '27017';
    config.db.url = 'mongodb://localhost/jackieandlevi';
    break;
  case 'production':
    config.app.port = process.env.PORT || 3001;
    config.app.url = 'http://jackieandlevi.com:' + config.app.port;

    // TODO: set up the actual db params
    config.db.port = '27017';
    config.db.url = 'mongodb://localhost/jackieandlevi';
    break;
  default:
    throw new Error('Invalid mode: ' + config.environment);
}

module.exports = config;
