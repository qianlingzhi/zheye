<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进去专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts>
import { computed } from '@vue/reactivity'
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from '../testData'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list?.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
