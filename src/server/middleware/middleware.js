/**
 * @module middleware
 *
 * Exposes the setMiddleware function, which sets up all of the middleware functionality for the
 * server.
 */

var config = require('../config/config');

/**
 * Sets up middleware for the server.
 *
 * @param {Object} server
 */
exports.init = function (server) {
  var staticFiles = require('./static-files');

  attachExpressMiddleware(server);
  staticFiles.init(server);
};

/**
 * Sets up some common Express middleware logic. This includes middleware for:
 *
 *   - Convenient logging
 *   - Serving a favicon
 *   - Parsing request content bodies
 *   - Parsing request cookies
 *   - Storing and retrieving session data
 *
 * @param {Object} server
 */
function attachExpressMiddleware(server) {
  var config = require('../config/config'),
      db = require('../database/db'),
      morgan = require('morgan'), // For logging
      favicon = require('serve-favicon'), // For serving our favicon
      bodyParser = require('body-parser'), // For parsing urlencoded and json request bodies
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')(session);

  // Set up the templating engine
  server.set('views', __dirname); // TODO: remove the view engine; we will not need this after the 404 page has become a client-side route
  server.set('view engine', 'jade');

  server.use(morgan('dev', {immediate: true}));
  server.use(favicon(config.app.faviconPath));
  server.use(bodyParser());
  server.use(cookieParser());
  // TODO: add database support on NodeJitsu
//  server.use(session({
//    secret: config.app.sessionSecret,
//    store: new MongoStore({
//      mongoose_connection: db.getDatabaseConnection(),
//      collection: 'sessions'
//    })
//  }));
  server.use(handleError);
}

function handleError(error, req, res, next) {
  console.error(error);
  res.status(500).send(error);
}
