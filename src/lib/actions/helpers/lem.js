'use strict';

var window = require('@adobe/reactor-window');
var loadscript = require('@adobe/reactor-load-script');
var lmSMTObj;

var createCmdQ = function (){
    var tempQ = [];
    var methods = [
        "init",
        "page",
        "track",
        "identify"
    ]
    for (var i=0; i<methods.length; i++) {
        tempQ[methods[i]] = function(methodName){
            return function(){
                tempQ.push([methodName].concat(Array.prototype.slice.call(arguments)));
            };
        }(methods[i]);

    }
    tempQ.init(turbine.getExtensionSettings().writeKey);
    return tempQ;
}

if(!window.lmSMTObj){
    window.lmSMTObj = createCmdQ();
}


var url = "https://cdn25.lemnisk.co/ssp/st/"+turbine.getExtensionSettings().clientId+".js";
loadscript(url).then(
    function (){
        turbine.logger.log("Lemnisk tags loaded");
    },
    function (){
        turbine.logger.log("Lemnisk tags could not be loaded");
    }
)

module.exports = window.lmSMTObj;