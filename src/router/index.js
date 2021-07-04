import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Rome77 from '../views/Rome77.vue'
import Wembley78 from '../views/Wembley78.vue'
import Paris81 from '../views/Paris81.vue'
import Rome84 from '../views/Rome84.vue'
import Istanbul05 from '../views/Istanbul05.vue'
import Madrid19 from '../views/Madrid19.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rome77",
    name: "Rome 77",
    component: Rome77
  },
  {
    path: '/wembley78',
    name: 'Wembley 78',
    component: Wembley78
  },
  {
    path: '/paris81',
    name: 'Paris 81',
    component: Paris81
  },
  {
    path: '/rome84',
    name: 'Rome 84',
    component: Rome84
  },
  {
    path: '/istanbul05',
    name: 'Istanbul 05',
    component: Istanbul05
  },
  {
    path: '/madrid19',
    name: 'Madrid 19',
    component: Madrid19
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
