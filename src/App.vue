<template>
  <div>
    <GlobalHeader :user="currentUser" />
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
const currentUser: UserProps = {
  isLogin: false,
  name: 'viking'
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      currentUser
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
