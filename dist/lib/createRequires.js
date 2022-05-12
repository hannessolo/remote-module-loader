"use strict";
exports.__esModule = true;
exports.createRequires = void 0;
var createRequires = function (dependencies) { return function (name) {
    var _dependencies = dependencies || {};
    if (!(name in _dependencies)) {
        throw new Error("Could not require '" + name + "'. '" + name + "' does not exist in dependencies.");
    }
    return _dependencies[name];
}; };
exports.createRequires = createRequires;
//# sourceMappingURL=createRequires.js.map