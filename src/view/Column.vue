<template>
  <div class="column-detail-page w-690">
    <div class="column-info row mb-4 border-bottom pb-4 align-item-center">
      <div class="col-3 text-center">
        <img :src="column?.avatar" alt="" class="rounded-circle border w-100"/>
      </div>
      <div class="col-9">
        <h4>{{column?.title}}</h4>
        <p class="text-muted">{{column?.description}}</p>
      </div>
    </div>
    <div v-for="item in list" :key="item.id">
      <post-item :item="item"></post-item>
    </div>
  </div>
</template>

<script lang=ts>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
// import { testPosts, testColumn } from '@/testData'
import PostItem from '@/components/PostItem.vue'
import { postStore, columnStore } from '@/pinia'
export default defineComponent({
  components: {
    PostItem
  },
  setup () {
    const route = useRoute()
    const columnId = +route.params.id
    const postStoreData = postStore()
    const columnStoreData = columnStore()
    const column = columnStoreData.getColumnbyId(columnId)
    const list = postStoreData.getPostBycid(columnId)
    return {
      route,
      column,
      list
    }
  }
})
</script>

<style  lang="scss" scoped>
</style>
