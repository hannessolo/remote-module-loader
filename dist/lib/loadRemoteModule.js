"use strict";
exports.__esModule = true;
exports.createLoadRemoteModule = exports.activateModule = exports.loadModuleSource = void 0;
var memoize_1 = require("./memoize");
var nodeFetcher_1 = require("./nodeFetcher");
var index_1 = require("./xmlHttpRequestFetcher/index");
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
/* istanbul ignore next - difficult to test */
var defaultFetcher = isBrowser ? index_1["default"] : nodeFetcher_1["default"];
var defaultRequires = function (name) {
    throw new Error("Could not require '" + name + "'. The 'requires' function was not provided.");
};
var loadModuleSource = function (url, fetcher) {
    var _fetcher = fetcher || defaultFetcher;
    return _fetcher(url);
};
exports.loadModuleSource = loadModuleSource;
var activateModule = function (moduleSource, requires) {
    var exports = {};
    var module = { exports: exports };
    var func = new Function("require", "module", "exports", moduleSource);
    func(requires, module, exports);
    return module.exports;
};
exports.activateModule = activateModule;
var createLoadRemoteModule = function (_a) {
    var _b = _a === void 0 ? {} : _a, fetcher = _b.fetcher, requires = _b.requires;
    var _requires = requires || defaultRequires;
    var _fetcher = fetcher || defaultFetcher;
    return (0, memoize_1["default"])(function (url) {
        return (0, exports.loadModuleSource)(url, _fetcher).then(function (moduleSource) {
            return (0, exports.activateModule)(moduleSource, _requires);
        });
    });
};
exports.createLoadRemoteModule = createLoadRemoteModule;
//# sourceMappingURL=loadRemoteModule.js.map