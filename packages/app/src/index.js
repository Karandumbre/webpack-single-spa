// import('./bootstrap');
import { registerApplication, start } from "single-spa";

registerApplication(
  "header",
  () => import("HEADER/Header"),
  (location) => location.pathname === "" || location.pathname === "/"
);

registerApplication(
  "login",
  () => import("LOGIN/Login"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "dashboard",
  () => import("DASHBOARD/Dashboard"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "signup",
  () => import("SIGNUP/SignUp"),
  (location) => location.pathname.startsWith("/")
);

start();
