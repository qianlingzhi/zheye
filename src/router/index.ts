import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Column from '../view/Column.vue'
import PublishPost from '../view/PublishPost.vue'
import Register from '../view/Register.vue'
import { userStore, pinia } from '@/pinia'
const store = userStore(pinia)
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
    },
    {
      path: '/publishPost',
      name: 'publishPost',
      component: PublishPost,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
router.beforeEach((to, _from, next) => {
  if (to.name !== 'login' && !store.user.isLogin && to.meta.isLogin) {
    router.push({ name: 'login' })
  }
  next()
})
export default router
