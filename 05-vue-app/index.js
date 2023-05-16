import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

window.vueApp = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(Root);
    },
  },
});
