import { singleSpaAngular } from "single-spa-angular";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgZone } from "@angular/core";
import { AppModule } from "./src/app.module";
import { ReplaySubject } from "rxjs";
import { LifeCycles } from "single-spa";

export const singleSpaPropsSubject = new ReplaySubject(1);

declare global {
  interface Window {
    angularApp: LifeCycles<unknown>;
  }
}

window.angularApp = singleSpaAngular({
  bootstrapFunction(singleSpaProps) {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<angular-app>",
  NgZone,
});
