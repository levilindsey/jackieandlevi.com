// This module is important for connecting this app to the server. It exports a function, which attaches all of the
// necessary route handlers for this app.

var jackieRouteRegex = /^\/jackie(?:\/.*)?$/;
var leviRouteRegex = /^\/levi(?:\/.*)?$/;
var hexGridRoutRegex = /^\/hex-grid(?:\/.*)?$/;
var templateFile = '/templates/index';

var templatePath = null;

// Attaches the route handlers for this app.
exports.attachRoutes = function (server, appPath, config) {
  templatePath = appPath + templateFile;

  //server.get(jackieRouteRegex, function(req, res, next) {
  //  handleRequest(req, res, next, 'jackie');
  //});
  server.get(leviRouteRegex, function(req, res, next) {
    handleRequest(req, res, next, 'levi');
  });
  server.get(hexGridRoutRegex, function(req, res, next) {
    handleRequest(req, res, next, 'levi');
  });

  // ---  --- //

  // Handles a request for this app.
  function handleRequest(req, res, next, person) {
    var content = {
      analyticsScript: config.app.analyticsScript
    };
    res.render(templatePath, content);
  }
};
