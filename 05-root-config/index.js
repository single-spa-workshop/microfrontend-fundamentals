import { registerApplication, start } from "single-spa";

if (!window.reactApp) {
  throw Error("Please run 05-react-app in a separate terminal tab");
}

if (!window.vueApp) {
  throw Error("Please run 05-vue-app in a separate terminal tab");
}

if (!window.angularApp) {
  throw Error("Please run 05-angular-app in a separate terminal tab");
}

registerApplication({
  name: "react-app",
  app: window.reactApp,
  activeWhen: ["/react"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  activeWhen: ["/vue"],
});

registerApplication({
  name: "angular-app",
  app: window.angularApp,
  activeWhen: ["/angular"],
});

start();
