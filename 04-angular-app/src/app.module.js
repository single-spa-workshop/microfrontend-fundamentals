"use strict";
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var empty_route_component_1 = require("./components/empty-route/empty-route.component");
var home_component_1 = require("./components/home/home.component");
var subroute_component_1 = require("./components/subroute/subroute.component");
var i0 = require("@angular/core");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent, empty_route_component_1.EmptyRouteComponent, home_component_1.AngularHomeComponent, subroute_component_1.AngularSubRouteComponent], imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule],
                declarations: [app_component_1.AppComponent, empty_route_component_1.EmptyRouteComponent, home_component_1.AngularHomeComponent, subroute_component_1.AngularSubRouteComponent],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();
