"use strict";
exports.__esModule = true;
var status_1 = require("../status");
var readyState_1 = require("./readyState");
var xmlHttpRequestFetcher = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== readyState_1.DONE)
                return;
            xhr.status === status_1.OK
                ? resolve(xhr.responseText)
                : reject(new Error("HTTP Error Response: " + xhr.status + " " + xhr.statusText + " (" + url + ")"));
        };
        xhr.open("GET", url, true);
        xhr.send();
    });
};
exports["default"] = xmlHttpRequestFetcher;
//# sourceMappingURL=index.js.map