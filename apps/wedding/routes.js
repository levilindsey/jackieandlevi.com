// This module is important for connecting this app to the server. It exports
// a function, which attaches all of the necessary route handlers for this app.

var PHOTO_VIEWER_ROUTE_REGEX = /^\/wedding\/photos(?:\/.*)?$/;
var INVITE_ROUTE_REGEX = /^\/wedding(?:\/.*)?$/;

var inviteTemplatePath = null;
var photoViewerTemplatePath = null;

// Attaches the route handlers for this app.
exports.attachRoutes = function (server, appPath, config) {
  inviteTemplatePath = appPath + '/templates/invite-index';
  photoViewerTemplatePath = appPath + '/public/photos-index.html';

  server.get(PHOTO_VIEWER_ROUTE_REGEX, handlePhotoViewerRequest);
  server.get(INVITE_ROUTE_REGEX, handleInviteRequest);

  // ---  --- //

  // Handles a request for the photo-viewer app.
  function handlePhotoViewerRequest(req, res, next) {
    var dirs = req.path.split('/');

    if (dirs[3] === '' && dirs.length === 4 ||
        dirs.length === 3) {
      res.sendFile(photoViewerTemplatePath);
    } else {
      next();
    }
  }

  // Handles a request for the invite app.
  function handleInviteRequest(req, res, next) {
    var content, dirs;

    dirs = req.path.split('/');

    if (dirs[2] === 'invite' && dirs[3] === '' && dirs.length === 4 ||
        (dirs[2] === '' || dirs[2] === 'invite') && dirs.length === 3 ||
        dirs.length === 2) {
      content = {
        analyticsScript: config.app.analyticsScript
      };
      res.render(inviteTemplatePath, content);
    } else {
      next();
    }
  }
};
