import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Cookies from "cookies-ts";
import jwt from "jsonwebtoken";

const cookies = new Cookies();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = cookies.get("token");
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || "");
    if (to.path === "/" || !routes.some(({ path }) => path === to.path))
      return next({ path: "/home" });
    return next();
  } else {
    if (to.path === "/") return next();
    return next({ path: "/" });
  }
});

export default router;
