<template>
  <div class="container">
    <ColumnListVue :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import ColumnListVue from '../components/ColumnList.vue'
import { columnStore } from '@/pinia'
export default defineComponent({
  name: 'App',
  components: {
    ColumnListVue
  },
  setup () {
    const store = columnStore()
    onMounted(() => { store.getColumns() })
    const list = computed(() => store.testColumn)
    return {
      list
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
