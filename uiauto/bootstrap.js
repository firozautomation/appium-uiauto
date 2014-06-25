/* globals env, alerts, commands, $ */

/* jshint ignore:start */
#import "./vendors/mechanic.js"
#import "lib/env.js"
#import "lib/errors.js"
#import "lib/mechanic-ext/index.js"
#import "lib/element-patch/index.js"
#import "lib/commands.js"
#import "lib/alerts.js"
/* jshint ignore:end */
var bootstrap;

(function () {
  bootstrap = function (dynamicEnv) {
    env.init(dynamicEnv);
    $.isVerbose = env.isVerbose;
    alerts.configure();
    commands.startProcessing();
  };
})();
