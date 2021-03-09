import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
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
