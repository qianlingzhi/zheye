import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import Column from '../view/Column.vue'
import PublishPost from '../view/PublishPost.vue'
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
      path: '/PublishPost',
      name: 'publishPost',
      component: PublishPost,
      meta: {
        isLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.name !== 'login')
  console.log(store.user)
  console.log(to.meta.isLogin)
  if (to.name !== 'login' && !store.user.id && to.meta.isLogin) {
    router.push({ name: 'login', params: { path: from.path } })
  }
  next()
})
export default router
