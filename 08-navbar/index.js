import Vue from "vue";
import VueRouter from "vue-router";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
    router: new VueRouter({
      mode: "history",
      routes: [],
    }),
    render(h) {
      return h(Root, {
        props: {
          authToken: this.authToken,
        },
      });
    },
  },
});

export const { bootstrap, mount, unmount, update } = app;

export { getNavHeightPx } from "./Root.vue";

export { default as BelowNav } from "./BelowNav.vue";

export { default as SingleSpaWorkshopLogo } from "./SingleSpaWorkshopLogo.vue";
