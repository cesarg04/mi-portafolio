import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Proyectos from "../views/Proyectos.vue"
import Contacto from "../views/Contacto.vue"
import Conoceme from "../views/Conoceme.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  },
  {
    path: "/conoceme",
    name: "Conoceme",
    component: Conoceme
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;