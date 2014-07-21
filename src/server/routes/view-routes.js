/**
 * @module view-routes
 *
 * Handles all HTTP requests that are intended for view retrieval.
 */

var config = require('../config/config');

/**
 * Attaches the route handlers to the server.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  console.log('Attaching view-route handlers');

  config.app.apps.forEach(function (appName) {
    if (appName !== 'home' && appName !== 'page-missing') {
      attachHandlersForApp(config.app.appsPath + '/' + appName, server);
    }
  });

  attachHandlersForApp(config.app.homePath, server);
  attachHandlersForApp(config.app.pageMissingPath, server);
};

/**
 * Uses a module in the given appName directory to attach the route handlers for that app.
 *
 * @param {string} appPath
 * @param {Object} server
 */
function attachHandlersForApp(appPath, server) {
  console.log('Attaching routes for app at ' + appPath);
  require(appPath + '/routes').attachHandlers(server, appPath);
}
