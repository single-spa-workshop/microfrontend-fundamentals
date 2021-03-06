import Vue from "vue";
import VueRouter from "vue-router";
import singleSpaVue from "single-spa-vue";
import Root from "./Root.vue";
import Home from "./Home.vue";
import SubRoute from "./SubRoute.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    { path: "/vue", component: Home },
    { path: "/vue/subroute", component: SubRoute },
  ],
});

window.vueApp = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render(h) {
      return h(Root, {
        props: {
          name: this.name,
        },
      });
    },
  },
});
