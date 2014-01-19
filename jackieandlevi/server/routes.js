// This module exposes the attachHandlers function, which iterates through each
// of the apps in the app directory and has them attach their route handlers.

var HOME_DIR = '../';

// Attaches each app's route handlers to the server.
exports.attachHandlers = function attachHandlers(apps, appsDir, homeDir, pageMissingDir, server, express) {
  attachHandlersForApp(HOME_DIR + homeDir, server);

  apps.forEach(function(appName) {
    attachHandlersForApp(HOME_DIR + appsDir + '/' + appName, server);
  });

  attachHandlersForApp(HOME_DIR + pageMissingDir, server);
};

// Uses a module in the given appName directory to attach the route handlers
// for that app.
function attachHandlersForApp(appPath, server) {
  console.log('Attaching routes for app: ' + appPath);
  require(appPath + '/routes')(server, appPath);
}
