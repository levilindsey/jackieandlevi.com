// This module exposes the setMiddleware function, which sets up all of the
// middleware functionality for the server.

var BASE_DIR = '../../';

var stylus = require('stylus');

// Sets up the middleware for the server.
exports.setMiddleware = function setMiddleware(apps, appsDir, homeDir, pageMissingDir, server, express) {
  // Set up the templating engine
  server.set('views', __dirname);
  server.set('view engine', 'jade');

  server.use(express.logger('dev'));
  server.use(express.favicon());// TODO: what is this? need favicons to change for each app.
  server.use(express.json());
  server.use(express.urlencoded());
  server.use(express.methodOverride());

  setUpStaticFiles(apps, appsDir, homeDir, pageMissingDir, server, express);
  server.use(server.router);

  // development only
  if (server.get('env') === process.env.NODE_ENV) {
    server.use(express.errorHandler());
  } 
};

// Set up the static files
function setUpStaticFiles(apps, appsDir, homeDir, pageMissingDir, server, express) {
  var mountPath, staticPath, i;

  // Set up the home files
  staticPath = __dirname + '/' + BASE_DIR + homeDir + '/public';
  server.use(stylus.middleware(staticPath));
  server.use(express.static(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);

  // Set up the pagemissing files
  staticPath = __dirname + '/' + BASE_DIR + pageMissingDir + '/public';
  server.use(stylus.middleware(staticPath));
  server.use(express.static(staticPath));
  console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);

  // Set up each of the apps' specific files
  apps.forEach(function(app) {
    mountPath = '/' + app;
    staticPath = __dirname + '/' + BASE_DIR + appsDir + '/' + app + '/public';
    server.use(mountPath, stylus.middleware(staticPath));
    server.use(mountPath, express.static(staticPath));
    console.log('Serving static files: staticPath=' + staticPath + ', mountPath=' + mountPath);
  });
}
