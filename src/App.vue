<template>
  <div>
    <GlobalHeader :user="store.user" />
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-lingt mt6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">2022 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { userStore } from './pinia'
const currentUser: UserProps = {
  isLogin: true,
  name: 'viking',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const store = userStore()
    store.user = currentUser
    return {
      store
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.w-690 {
  width: 690PX;
  margin: 0 auto;
}
</style>
