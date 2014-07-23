/**
 * @module static-files
 *
 * Handles the serving of static files.
 */

var config = require('../config/config');

/**
 * Sets up static file-serving middleware.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  setUpStaticFiles(server);
};

/**
 * Serves static file serving for all applications.
 *
 * @param {Object} server
 */
function setUpStaticFiles(server) {
  var serveStatic, mountPath, staticPath;

  serveStatic = require('serve-static'); // For serving static files

  config.app.apps.forEach(function (appName) {
    setUpStaticFilesForApp(appName, server, serveStatic);
  });

  // Set up static files for Bower
  mountPath = '/bower_components';
  staticPath = config.app.bowerComponentsPath;
  server.use(mountPath, serveStatic(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);
}

/**
 * Sets up static file serving for the given app.
 *
 * @param {string} appName
 * @param {Object} server
 * @param {Object} serveStatic
 */
function setUpStaticFilesForApp(appName, server, serveStatic) {
  var mountPath, staticPath;

  mountPath = '/' + appName;
  staticPath = config.app.appsPath + '/' + appName + '/public';
  server.use(mountPath, serveStatic(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);
}
