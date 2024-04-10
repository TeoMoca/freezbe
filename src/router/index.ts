import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = cookies.get("token");
  if (token) {
    if (to.path === "/" || !routes.some(({ path }) => path === to.path))
      return next({ path: "/home" });
    return next();
  } else {
    if (to.path === "/") return next();
    return next({ path: "/" });
  }
});

export default router;
