// This module is important for connecting this app to the server. It exports
// a function, which attaches all of the necessary route handlers for this app.

var ROUTE_REGEX = '*';
var TEMPLATE_FILE = '/templates/index';

var templatePath = null;

// Attaches the route handlers for this app.
module.exports = function attachHandlers(server, appPath) {
  templatePath = appPath + TEMPLATE_FILE;

  server.all(ROUTE_REGEX, handleRequest);
}

// Handles a request for this app.
function handleRequest(req, res, next) {
  var content = {
    status: 404,
    pageName: req.host + req.path
  };
  res.render(templatePath, content);
}
