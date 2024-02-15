cordova.define("com.apptracker.phonegap.android.AppTracker", function(require, exports, module) {
var AppTracker = {
        startSession : function(apikey, autoCache, successcallback, errorcallback) {
    		cordova.exec(successcallback, errorcallback, "AppTracker", "startSession", [apikey, autoCache]);
    	},
    	closeSession : function(successcallback, errorcallback) {
    		cordova.exec(successcallback, errorcallback, "AppTracker", "closeSession", []);
    	},
    	loadModule : function(location, userData, successcallback, errorcallback) {
    		cordova.exec(successcallback, errorcallback, "AppTracker", "loadModule", [location, userData]);
    	},
        loadModuleToCache : function(location, userData, successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "loadModuleToCache", [location, userData]);
        },
        setCrashHandlerStatus : function(enable, successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "setCrashHandlerStatus", [enable]);
        },
        fixAdOrientation : function(orientation, successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "fixAdOrientation", [orientation]);
        },
        destroyModule : function(successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "destroyModule", []);
        },
        setAgeRange: function(ageRange, successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "setAgeRange", [ageRange]);
        },
        setGender: function(gender, successcallback, errorcallback) {
            cordova.exec(successcallback, errorcallback, "AppTracker", "setGender", [gender]);
        } 
};
module.exports = AppTracker;
});
