import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";

window.vueApp = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(Root, {
        props: {
          name: this.name,
        },
      });
    },
  },
});
