import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/trees",
      name: "trees",
      component: () => import("./components/TreesList")
    },
    {
      path: "/trees/:id",
      name: "tree-details",
      component: () => import("./components/Tree")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTree")
    }
  ]
});