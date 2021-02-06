import { registerApplication, start } from "single-spa";

if (!window.reactApp) {
  throw Error("Please run 03-react-app in a separate terminal tab");
}

if (!window.vueApp) {
  throw Error("Please run 03-vue-app in a separate terminal tab");
}

registerApplication({
  name: "react-app",
  app: window.reactApp,
  activeWhen: ["/"],
});

registerApplication({
  name: "vue-app",
  app: window.vueApp,
  activeWhen: ["/"],
});

start();
