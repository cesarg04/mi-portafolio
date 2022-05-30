import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Proyectos from "../views/Proyectos.vue"
import Contacto from "../views/Contacto.vue"
import Conoceme from "../views/Conoceme.vue"
import Mediamanager from '../components/projects/Mediamanager.vue'
import PokemonGame from '../components/projects/PokemonGame.vue'
import CryptoApp from '../components/projects/CryptoApp.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos,
  },
  {
    path: "/proyectos/mediamanager",
    name: "Mediamanager",
    component: Mediamanager
  },
  {
    path: "/proyectos/PokemonGame",
    name: "Pokemon Game",
    component: PokemonGame
  },
  {
    path: "/proyectos/cryptoApp",
    name: "Crypto App",
    component: CryptoApp
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
  },
  { path: '/:pathMatch(.*)*',
    name: 'Page not Found',
    component: Home 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;