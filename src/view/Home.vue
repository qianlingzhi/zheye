<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <ColumnListVue :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnListVue, { ColumnProps } from '../components/ColumnList.vue'
import GlobalHeader, { UserProps } from '../components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const currentUser: UserProps = {
  isLogin: true,
  name: 'viking'
}
const testlist: ColumnProps[] = [
  {
    id: 1,
    title: '标题1',
    description: '软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能'
  },
  {
    id: 2,
    title: '标题1',
    avatat: 'https://cdn.asymall.com/site/20220509/3ee741ecfd7b347c4601e41a5429efdc.jpg',
    description: '软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能'
  },
  {
    id: 3,
    title: '标题1',
    avatat: 'https://cdn.asymall.com/site/20220509/3ee741ecfd7b347c4601e41a5429efdc.jpg',
    description: '软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能'
  }]
export default defineComponent({
  name: 'App',
  components: {
    ColumnListVue,
    GlobalHeader
  },
  setup () {
    return {
      list: testlist,
      currentUser
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
