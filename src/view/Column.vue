<template>
  <div class="column-detail-page w-690">
    <div class="column-info row mb-4 border-bottom pb-4 align-item-center">
      <div class="col-3 text-center">
        <img :src="column && column.avatar && column.avatar.url" alt="" class="rounded-circle border w-100" />
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
import { defineComponent, onMounted, computed } from 'vue'
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
    const columnId = route.params.id as string
    const postStoreData = postStore()
    const columnStoreData = columnStore()
    onMounted(() => {
      columnStoreData.getColumn(columnId)
      postStoreData.getPostBycid(columnId)
    })
    const column = computed(() => columnStoreData.getColumnbyId(columnId))
    const list = computed(() => postStoreData.testPosts)
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
