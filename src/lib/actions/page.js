'use strict';
var lmSMTObj = require('./helpers/lem');

module.exports = function (settings) {
    lmSMTObj.page(settings.g_name.name, settings.g_props, settings.g_id);
    turbine.logger.log('Send event: page(' + JSON.stringify(settings) + ')');
};
