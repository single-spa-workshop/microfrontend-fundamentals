"use strict";
exports.__esModule = true;
exports.AngularSubRouteComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var AngularSubRouteComponent = /** @class */ (function () {
    function AngularSubRouteComponent() {
    }
    AngularSubRouteComponent.ɵfac = function AngularSubRouteComponent_Factory(t) { return new (t || AngularSubRouteComponent)(); };
    AngularSubRouteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularSubRouteComponent, selectors: [["angular-subroute"]], decls: 2, vars: 0, template: function AngularSubRouteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Angular Sub Route");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2, changeDetection: 0 });
    return AngularSubRouteComponent;
}());
exports.AngularSubRouteComponent = AngularSubRouteComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularSubRouteComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'angular-subroute',
                templateUrl: './subroute.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
