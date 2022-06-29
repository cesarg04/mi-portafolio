import { createWebHistory, createRouter } from "vue-router";
// import the routes
import Home from "../views/Home.vue";
import Proyectos from "../views/Proyectos.vue"
import Contacto from "../views/Contacto.vue"
import Conoceme from "../views/Conoceme.vue"
import Mediamanager from '../components/projects/Mediamanager.vue'
import PokemonGame from '../components/projects/PokemonGame.vue'
import CryptoApp from '../components/projects/CryptoApp.vue'
import Todolist from '../components/projects/Todolist.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      enterClass: 'animate__animated animate__fadeInDown',
      leaveClass: 'animate__animated animate__fadeOutUp'
    }
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos,

  },
  {
    path: "/proyectos/mediamanager",
    name: "Mediamanager",
    component: Mediamanager,

    
  },
  {
    path: "/proyectos/PokemonGame",
    name: "Pokemon Game",
    component: PokemonGame,

  },
  {
    path: "/proyectos/cryptoApp",
    name: "Crypto App",
    component: CryptoApp,

  },
  {
    path: "/proyectos/Todolist",
    name: "TodoList",
    component: Todolist
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,

  },
  {
    path: "/conoceme",
    name: "Conoceme",
    component: Conoceme,

  },
  { path: '/:pathMatch(.*)*',
    name: 'Page not Found',
    component: Home,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition){
    return {top: 0}
  }
});

export default router;