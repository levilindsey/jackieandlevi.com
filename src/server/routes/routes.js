/**
 * @module routes
 *
 * Exposes the attachHandlers function, which attaches the route handlers.
 */

/**
 * Attaches the route handlers to the server.
 *
 * @param {Object} server
 */
exports.attachRoutes = function (server) {
  var viewRoutes = require('./view-routes');

  viewRoutes.attachRoutes(server);
};
