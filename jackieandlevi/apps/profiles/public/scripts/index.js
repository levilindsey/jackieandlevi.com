/**
 * This static module drives the app.
 * @module index
 */
(function () {

  var params, util, log;

  // ------------------------------------------------------------------------------------------- //
  // Private static functions

  /**
   * Initializes this app.
   * @function index~init
   */
  function init() {
    params = app.params;
    util = app.util;
    app.Log.initStaticFields();
    log = new app.Log('index');

    log.d('init');

    util.init();

    util.listen(window, 'load', onDocumentLoad);
  }

  /**
   * Resets all of the state for this app.
   * @function index~reset
   */
  function reset() {
    // Hide Levi's GitHub ribbon on small screens
    if (window.location.pathname.indexOf('levi') >= 0) {
      if (util.getViewportSize().w < 800) {
        document.getElementById('forkMeOnGitHubRibbon').style.display = 'none';
      }
    }
  }

  /**
   * This is the event handler for the completion of the DOM loading.
   * @function index~onDocumentLoad
   */
  function onDocumentLoad() {
    log.i('onDocumentLoad');

    reset();
  }

  // ------------------------------------------------------------------------------------------- //

  if (!window.app) window.app = {};

  console.log('index module loaded');

  init();
})();
