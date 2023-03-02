import { createRouter, createWebHistory } from "vue-router";
import baseRouters from "./base.js";

let routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
