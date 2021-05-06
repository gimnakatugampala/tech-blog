import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Single',
    component:Single,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
