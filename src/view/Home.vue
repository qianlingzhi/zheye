<template>
  <div class="container">
    <ColumnListVue :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnListVue from '../components/ColumnList.vue'
import { ColumnProps, testColumn } from '@/testData'
const testlist: ColumnProps[] = testColumn
export default defineComponent({
  name: 'App',
  components: {
    ColumnListVue
  },
  setup () {
    return {
      list: testlist
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
