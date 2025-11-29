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
          path: "/login",
          component: () => import("@/pages/Login.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: AdminLayout,
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
          path: "catagories",
          component: () => import("@/pages/Catagories.vue"),
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
      path: "/register",
      component: () => import("@/pages/Register.vue"),
    },
  ],
});

export default router;
