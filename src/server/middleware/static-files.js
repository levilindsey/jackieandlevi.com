/**
 * @module static-files
 *
 * Handles the serving of static files.
 */

var config = require('../config/config');

/**
 * Sets up middleware for the server.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  setUpStaticFiles(server);
};

/**
 * Serve static files.
 *
 * @param {Object} server
 */
function setUpStaticFiles(server) {
  var serveStatic = require('serve-static'); // For serving static files

  config.app.apps.forEach(function (appName) {
    setUpStaticFilesForApp(appName, server, serveStatic);
  });
}

function setUpStaticFilesForApp(appName, server, serveStatic) {
  var mountPath, staticPath;

  mountPath = '/' + appName;
  staticPath = config.app.appsPath + '/' + appName + '/public';
  server.use(mountPath, serveStatic(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);
}
