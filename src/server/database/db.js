/**
 * @module db
 *
 * Serves as the interface to the database for the rest of the server logic.
 */

var Q = require('q'),
    mongoose = require('mongoose'),
    config = require('../config/config');

// --- Database connection --- //

/**
 * Initializes the database.
 */
exports.init = function () {
  connectToDatabase();
};

/**
 * Connects to the Mongo database.
 */
function connectToDatabase() {
  mongoose.connect(config.db.url);

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function () {
    console.log('Connected to database');
  });
}

/**
 * Retrieves the connection to the Mongo database.
 *
 * @returns {Object}
 */
exports.getDatabaseConnection = function () {
  return mongoose.connection;
};

/**
 * Empties all collections in the database.
 */
exports.clear = function () {
  var deferred = Q.defer();

  mongoose.connection.once('open', function () {
    mongoose.connection.db.dropDatabase();
    console.log('Emptied database');
    deferred.resolve();
  });

  return deferred.promise;
};
