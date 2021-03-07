import { registerApplication, start } from "single-spa";

registerApplication({
  name: "home",
  app: () => System.import("home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "navbar",
  app: () => System.import("navbar"),
  activeWhen: ["/"],
});

start();
