// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '@/views/Auth.vue'
import Favorites from '@/views/Favorites.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next)=>{
  if ( to.name !== 'auth'){
    if (localStorage.getItem('accessToken')) {
      next()
      return
    } else {
      next('/auth');
      return
    }
  }
  next()
})

export default router
