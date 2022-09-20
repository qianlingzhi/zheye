<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link to="/" class="navbar-dark navbar-brand nav-link ">者也专栏</router-link >
    <ul v-if="!user?.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0" >
      <drop-down :title="`你好 ${user.nickName}`">
        <drop-down-item>
          <router-link class="dropdown-item" to="/publishPost">新建文章</router-link>
        </drop-down-item>
        <drop-down-item disable>
          <a class="dropdown-item" href="#" >编辑资料</a>
        </drop-down-item>
        <drop-down-item>
          <a class="dropdown-item" href="#" >退出登录</a>
        </drop-down-item>
      </drop-down>
    </ul>
  </nav>
</template>

<script lang=ts>
import { defineComponent, PropType } from 'vue'
import { UserProps } from '../pinia/index'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  },
  components: {
    DropDown,
    DropDownItem
  }
})
</script>

<style >
</style>
