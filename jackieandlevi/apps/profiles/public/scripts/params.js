/**
 * This module defines a collection of parameters used throughout this app.
 * @module params
 */
(function () {
  var params, moduleParams;

  params = {};

  params.BASE_DIR = '/';

  // --- General app parameters --- //

  moduleParams = {};
  params.APP = moduleParams;

  moduleParams.TITLE = 'Jackie and Levi\'s Profiles';
  moduleParams.VERSION = '??.??.??';
  moduleParams.LICENSE =
      'The MIT License (MIT). Copyright (c) 2014 Levi Lindsey <levi@jackieandlevi.com>.';

  // --- Log parameters --- //

  moduleParams = {};
  params.LOG = moduleParams;

  moduleParams.RECENT_ENTRIES_LIMIT = 80;
  moduleParams.DEBUG = true;
  moduleParams.VERBOSE = true;

  // --- Miscellaneous parameters --- //

  params.ADD_CSS_TRANSITION_DELAY = 80;
  params.SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  params.TWO_PI = Math.PI * 2;
  params.HALF_PI = Math.PI * 0.5;
  params.SMALL_SCREEN_WIDTH_THRESHOLD = 900;
  params.SMALL_SCREEN_HEIGHT_THRESHOLD = 675;

  // --- Expose this module --- //

  if (!window.app) window.app = {};
  window.app.params = params;

  console.log('params module loaded');
})();
