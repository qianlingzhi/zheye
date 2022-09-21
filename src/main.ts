import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { pinia, loaderStore } from './pinia'
import axios from 'axios'
axios.defaults.baseURL = 'http://api.vikingship.xyz/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const loadStore = loaderStore()
axios.interceptors.request.use((config) => {
  loadStore.isLoadIng = true
  return config
})
axios.interceptors.response.use((response) => {
  loadStore.isLoadIng = false
  return response
}, (error) => {
  loadStore.isLoadIng = false
  return Promise.reject(error)
})
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
