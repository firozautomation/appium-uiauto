var path = require('path'),
    dynamicBootstrap = require('./dynamic-bootstrap');

module.exports = {
  prepareBootstrap: dynamicBootstrap.prepareBootstrap,
  rotate: path.resolve(__dirname, "../osa/Rotate.applescript"),
  logger: require('./logger')
};