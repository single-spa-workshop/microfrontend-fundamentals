import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import { registerApplication, start } from "single-spa";
import Root from "./Root.vue";

const app = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(Root, {
        authToken: this.authToken,
        name: this.name,
      });
    },
  },
});

registerApplication({
  name: "vue-app",
  app,
  activeWhen: ["/"],
  customProps: {
    authToken: "safd787sd90d87s90sdf8fs0d9",
  },
});

start();
