import { registerApplication, start } from "single-spa";
import "vue";

System.set(System.resolve("vue"), window.Vue);

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
