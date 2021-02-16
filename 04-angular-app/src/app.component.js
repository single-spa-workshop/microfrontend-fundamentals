"use strict";
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["angular-app"]], decls: 9, vars: 0, consts: [["routerLink", "/angular", 2, "padding", "16px", "display", "inline-block"], ["routerLink", "/angular/subroute", 2, "padding", "16px", "display", "inline-block"], ["routerLink", "/react", 2, "padding", "16px", "display", "inline-block"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵtext(1, "Angular Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "a", 1);
            i0.ɵɵtext(3, "Angular Sub Route");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵtext(5, "Leave Angular");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵtext(7, "Angular app is mounted.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "router-outlet");
        } }, directives: [i1.RouterLinkWithHref, i1.RouterOutlet], encapsulation: 2, changeDetection: 0 });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: "angular-app",
                templateUrl: "./app.component.html",
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
