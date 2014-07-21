// TODO: change this (right now it is copy/pasted from somewhere)
module.exports = function(config) {
  config.set({
    basePath: 'src',
    frameworks: ['mocha'],//, 'chai', 'sinon'],
    files: [ 'js/<em>&#42;/&#42;.js', 'test/</em>&#42;/&#42;.spec.js' ],
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['PhantomJS'],// or 'Chrome'
    captureTimeout: 6000,
    singleRun: true
  });
};
