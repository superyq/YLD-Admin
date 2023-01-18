import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/home/index.vue"),
    },
  ],
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
