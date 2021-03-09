import { pathToActiveWhen, registerApplication, start } from "single-spa";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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

start();
