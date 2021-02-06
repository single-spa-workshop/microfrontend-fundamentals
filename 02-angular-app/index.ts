import { singleSpaAngular } from "single-spa-angular";
import { registerApplication, start } from "single-spa";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgZone } from "@angular/core";
import { AppModule } from "./src/app.module";
import { ReplaySubject } from "rxjs";

export const singleSpaPropsSubject = new ReplaySubject(1);

const app = singleSpaAngular({
  bootstrapFunction(singleSpaProps) {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<app-root>",
  NgZone,
});

registerApplication({
  name: "angular-app",
  app,
  activeWhen: ["/"],
  customProps: {
    authToken: "asdf7s98df7f6sd909f87sdf0",
  },
});

start();
