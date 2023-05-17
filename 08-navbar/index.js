import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const app = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(Root, {
        authToken: this.authToken,
      });
    },
  },
  handleInstance(app) {
    app.use(router);
  },
});

export const { bootstrap, mount, unmount, update } = app;

export { getNavHeightPx } from "./Root.vue";

export { default as BelowNav } from "./BelowNav.vue";

export { default as SingleSpaWorkshopLogo } from "./SingleSpaWorkshopLogo.vue";
