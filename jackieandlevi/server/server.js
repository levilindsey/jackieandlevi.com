// This module exposes the createServer function, which creates the server 
// instance, sets up the middleware, and attaches the route handlers.

var BASE_DIR = 'jackieandlevi';
var APPS_DIR = BASE_DIR + '/apps';
var HOME_DIR = BASE_DIR + '/home';
var PAGE_MISSING_DIR = BASE_DIR + '/pagemissing';

var fs = require('fs');
var express = require('express');

var routes = require('./routes');
var middleware = require('./middleware');

// Sets up the server.
exports.createServer = function createServer() {
  var server, apps;

  // Initialize the HTTP server
  server = express();

  // Get the list of apps hosted on this site
  apps = getAppList();

  // Set up middleware
  middleware.setMiddleware(apps, APPS_DIR, HOME_DIR, PAGE_MISSING_DIR, server, express);

  // Attach route handlers
  routes.attachHandlers(apps, APPS_DIR, HOME_DIR, PAGE_MISSING_DIR, server, express);

  return server;
};

// Returns an array with the names of the apps in the apps directory.
function getAppList() {
 return fs.readdirSync(APPS_DIR); 
}
