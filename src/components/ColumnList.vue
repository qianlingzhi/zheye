<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatat" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进去专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts>
import { computed } from '@vue/reactivity'
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number
  title: string
  avatat?: string
  description: string
}
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
        if (!column.avatat) {
          column.avatat = require('@/assets/logo.png')
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
