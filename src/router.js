import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home")
    },
    {
      path: "/todolist",
      component: () => import("@/Apps/ToDoList/ToDoList")
    },
    {
      path: "/calculator",
      component: () => import("@/Apps/Calculator/Calculator")
    },
    {
      path: "/game",
      component: () => import("@/Apps/Games/Games")
    }
  ]
});
