var fs = require('fs'),
    path = require('path'),

    config = {};

// TODO: change this to use Node.js environment variables
config.environment = 'production';

config.app = {};

// This is just some random string that we can use to make our sessions a
// little more secure.
config.app.sessionSecret = process.env.SESSION_SECRET;

// Locations of some important files
config.app.projectRootPath = path.resolve(__dirname + '/../..');
config.app.appsPath = config.app.projectRootPath + '/apps';
config.app.homePath = config.app.appsPath + '/home';
config.app.pageMissingPath = config.app.appsPath + '/page-missing';
config.app.bowerComponentsPath = config.app.projectRootPath + '/bower_components';
config.app.faviconPath = config.app.homePath + '/public/images/favicon-32x32.png';

config.analyticsScript =
    "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
    "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
    "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
    "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
    "ga('create', 'UA-43971205-1', 'jackieandlevi.com');" +
    "ga('send', 'pageview');";

config.app.cacheMaxAge = 2592000000;

config.app.apps = fs.readdirSync(config.app.appsPath);

// Mode-specific parameters
switch (config.environment) {
  case 'development':
    config.app.port = 3001;
    config.app.url = 'http://localhost:' + config.app.port;
    break;
  case 'staging':
    config.app.port = process.env.PORT || 3001;
    config.app.url = 'http://jackieandlevi.com:' + config.app.port;
    break;
  case 'production':
    config.app.port = process.env.PORT || 3001;
    config.app.url = 'http://jackieandlevi.com:' + config.app.port;
    break;
  default:
    throw new Error('Invalid mode: ' + config.environment);
}

module.exports = config;
