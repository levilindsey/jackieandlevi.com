// This module is important for connecting this app to the server. It exports
// a function, which attaches all of the necessary route handlers for this app.

var JACKIE_ROUTE_REGEX = /^\/jackie(?:\/.*)?$/;
var LEVI_ROUTE_REGEX = /^\/levi(?:\/.*)?$/;
var TEMPLATE_DIR = '/templates';

var templatePath = null;

// Attaches the route handlers for this app.
module.exports = function attachHandlers(server, appPath) {
  templatePath = appPath + TEMPLATE_DIR;

  server.get(JACKIE_ROUTE_REGEX, function(req, res, next) {
    handleRequest(req, res, next, 'jackie');
  });
  server.get(LEVI_ROUTE_REGEX, function(req, res, next) {
    handleRequest(req, res, next, 'levi');
  });
}

// Handles a request for this app.
function handleRequest(req, res, next, person) {
  var template;
  var dirs = req.path.split('/');

  if (dirs[2] === '' || dirs.length === 2) {
    template = templatePath + '/' + person + 'About';
  } else {
    switch (dirs[2]) {
      case 'about':
        template = templatePath + '/' + person + 'About';
        break;
      case 'projects':
        template = templatePath + '/' + person + 'Projects';
        break;
      case 'resume':
        template = templatePath + '/' + person + 'Resume';
        break;
      case 'follow':
        template = templatePath + '/' + person + 'Follow';
        break;
      default:
        next();
        return;
    }
  }

  var content = {};
  res.render(template, content);
}
