"use strict";
exports.__esModule = true;
exports.AngularHomeComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var AngularHomeComponent = /** @class */ (function () {
    function AngularHomeComponent() {
    }
    AngularHomeComponent.ɵfac = function AngularHomeComponent_Factory(t) { return new (t || AngularHomeComponent)(); };
    AngularHomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularHomeComponent, selectors: [["angular-home"]], decls: 2, vars: 0, template: function AngularHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Angular Home");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2, changeDetection: 0 });
    return AngularHomeComponent;
}());
exports.AngularHomeComponent = AngularHomeComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularHomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'angular-home',
                templateUrl: './home.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
