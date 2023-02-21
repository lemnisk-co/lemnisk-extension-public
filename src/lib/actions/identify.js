'use strict';

var lmSMTObj = require('./helpers/lem');

module.exports = function(settings) {
    lmSMTObj.identify(settings.g_id.visitor_id, settings.g_props, settings.g_other_ids)
    turbine.logger.log('Send event: identify(' + JSON.stringify(settings) + ')');
};
