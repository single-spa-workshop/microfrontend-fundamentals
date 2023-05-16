import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

const app = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(Root, {
        props: {
          authToken: this.authToken,
        },
      });
    },
  },
});

export const { bootstrap, mount, unmount, update } = app;
