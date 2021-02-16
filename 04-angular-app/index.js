"use strict";
exports.__esModule = true;
exports.singleSpaPropsSubject = void 0;
var single_spa_angular_1 = require("single-spa-angular");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./src/app.module");
var rxjs_1 = require("rxjs");
exports.singleSpaPropsSubject = new rxjs_1.ReplaySubject(1);
window.angularApp = single_spa_angular_1.singleSpaAngular({
    bootstrapFunction: function (singleSpaProps) {
        exports.singleSpaPropsSubject.next(singleSpaProps);
        return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
    },
    template: "<angular-app>",
    NgZone: core_1.NgZone
});
