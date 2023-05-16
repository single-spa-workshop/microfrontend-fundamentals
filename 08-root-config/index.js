import { pathToActiveWhen, registerApplication, start } from "single-spa";
import "vue";

System.set(System.resolve("vue"), window.Vue);

registerApplication({
  name: "home",
  app: () => System.import("home"),
  activeWhen: pathToActiveWhen("/", true),
});

registerApplication({
  name: "navbar",
  app: () => System.import("navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "settings",
  app: () => System.import("settings"),
  activeWhen: ["/settings"],
});

System.import("vue-router").then(() => {
  System.set(System.resolve("vue-router"), window.VueRouter);
  start();
});
