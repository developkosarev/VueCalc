import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Formulate from "../views/Formulate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/formulate",
    name: "Formulate",
    component: Formulate
  }
];

//mode: "history",
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
