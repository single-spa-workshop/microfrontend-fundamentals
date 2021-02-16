"use strict";
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var subroute_component_1 = require("./components/subroute/subroute.component");
var empty_route_component_1 = require("./components/empty-route/empty-route.component");
var i0 = require("@angular/core");
var i1 = require("@angular/router");
var routes = [
    { path: 'angular', component: home_component_1.AngularHomeComponent },
    { path: 'angular/subroute', component: subroute_component_1.AngularSubRouteComponent },
    { path: '**', component: empty_route_component_1.EmptyRouteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [
            { provide: common_1.APP_BASE_HREF, useValue: "/" }
        ], imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule] });
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule],
                providers: [
                    { provide: common_1.APP_BASE_HREF, useValue: "/" }
                ]
            }]
    }], null, null); })();
