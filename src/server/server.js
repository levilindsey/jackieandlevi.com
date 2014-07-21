/**
 * @module server
 *
 * Exposes the createServer function, which creates the server instance, sets up the middleware,
 * and attaches the route handlers.
 */

/**
 * Sets up the server.
 */
exports.init = function () {
  var deferred = require('q').defer(),
      server = require('express')(),
      db = require('./database/db'),
      middleware = require('./middleware/middleware'),
      routes = require('./routes/routes'),
      config = require('./config/config');

  // TODO: add database support on NodeJitsu
//  db.init();
  middleware.init(server);
  routes.init(server);

  // Clean up some system state for development and testing
  if (config.environment === 'development') {
    // TODO: add in test data
    deferred.resolve(server);
//    db.clear()
//        .then(function () {
//          deferred.resolve(server);
//        })
//        .catch(function (error) {
//          deferred.reject(error);
//        });
  } else {
    deferred.resolve(server);
  }

  return deferred.promise;
};
