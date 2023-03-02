export default [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login.vue")
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import("@/pages/forget.vue")
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import("@/pages/layout.vue"),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import("@/pages/home.vue")
      }
    ]
  }
];
