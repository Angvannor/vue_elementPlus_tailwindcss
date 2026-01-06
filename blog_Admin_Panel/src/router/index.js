import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "@/layout/AdminLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: LoginLayout,
      children: [
        {
          path: "/",
          component: () => import("@/pages/Login.vue"),
        },
        {
          path: "/Login",
          component: () => import("@/pages/Login.vue"),
        },
      ],
    },
    {
      path: "/register",
      component: () => import("@/pages/Register.vue"),
    },
    {
      path: "/admin",
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          component: () => import("@/pages/Dashboard.vue"),
        },
        {
          path: "posts",
          component: () => import("@/pages/Posts.vue"),
        },
        {
          path: "categories",
          component: () => import("@/pages/Categories.vue"),
        },
        {
          path: "users",
          component: () => import("@/pages/Users.vue"),
        },
        {
          path: "profile",
          component: () => import("@/pages/Profile.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("currentUser");

  if (to.path.startsWith("/admin") && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
