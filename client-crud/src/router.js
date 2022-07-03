import Vue from "vue";
import VueRouter from "vue-router";
import treesList from '@/components/TreesList'
import addTree from '@/components/AddTree'
import tree from '@/components/Tree'

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "landing",
      component: treesList
    },
    {
      path: "/treelist",
      name: "treelist",
      component: treesList
    },
    {
      path: "/treelist/:id",
      name: "tree-details",
      component: tree
    },
    {
      path: "/add",
      name: "add",
      component: addTree
    }
  ]
});