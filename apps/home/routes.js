/**
 * The home route will only match a URL with no path value.
 */

var routeRegex = '/';
var indexFilePath = '/public/index.html';

// Attaches the route handlers for this app.
exports.attachRoutes = function (server, appPath, config) {
  indexFilePath = appPath + indexFilePath;

  server.get(routeRegex, handleRequest);

  // ---  --- //

// Handles a request for this app.
  function handleRequest(req, res, next) {
    res.sendFile(indexFilePath);
  }
};
