import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  //ABOUT 
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/generals/About.vue')
  },

  //PRODUCTO ESPECIFICO
  {
    path: '/ProductoEspecifico',
    name: 'ProductoEspecifico',
    component: () => import( '../views/generals/ProductoEspecifico.vue')
  },

   //COMPRA
   {
    path: '/Compra',
    name: 'Compra',
    component: () => import( '../views/generals/Compra.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
