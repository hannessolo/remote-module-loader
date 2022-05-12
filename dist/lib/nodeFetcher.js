"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var http = require("http");
var https = require("https");
var status_1 = require("./status");
/**
 * Get's a url. Compatible with http and https.
 */
var get = function (url) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof url !== "string") {
        return {
            on: function (eventName, callback) {
                callback(new Error("URL must be a string."));
            }
        };
    }
    return url.indexOf("https://") === 0
        ? https.get.apply(https, __spreadArray([url], args, false)) : http.get.apply(http, __spreadArray([url], args, false));
};
/**
 * Get's a URL and returns a Promise
 */
var nodeFetcher = function (url) {
    return new Promise(function (resolve, reject) {
        get(url, function (res) {
            if (res.statusCode !== status_1.OK) {
                return reject(new Error("HTTP Error Response: " + res.statusCode + " " + res.statusMessage + " (" + url + ")"));
            }
            var data = null;
            // called when a data chunk is received.
            res.on("data", function (chunk) {
                if (data === null) {
                    data = chunk;
                    return;
                }
                data += chunk;
            });
            // called when the complete response is received.
            res.on("end", function () { return resolve(data); });
        }).on("error", reject);
    });
};
exports["default"] = nodeFetcher;
//# sourceMappingURL=nodeFetcher.js.map