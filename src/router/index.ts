import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Column from '../view/Column.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: Column
    }
  ]
})
export default router
