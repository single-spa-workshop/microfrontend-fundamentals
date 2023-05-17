import { createApp, h } from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

window.vueApp = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      console.log("render", this);
      return h(Root, {
        name: this.name,
      });
    },
  },
});
