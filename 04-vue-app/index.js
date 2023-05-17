import { createApp, h } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";
import Home from "./Home.vue";
import SubRoute from "./SubRoute.vue";

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes: [
    { path: "/vue", component: Home },
    { path: "/vue/subroute", component: SubRoute },
  ],
});

window.vueApp = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(Root, {
        name: this.name,
      });
    },
  },
  handleInstance(app) {
    app.use(router);
  },
});
