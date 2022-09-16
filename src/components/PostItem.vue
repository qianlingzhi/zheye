<template>
  <div>
    <article class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>
          <a href="">{{item.title}}</a>
        </h4>
        <div class="row my-3 align-items-center">
          <div v-if="item.image" class="col-4">
            <img  class="rounded-lg w-100" :src="item.image" :alt="item.title">
          </div>
          <p class="col-8 text-muted">
            {{item.content}}
          </p>
        </div>
        <span class="">{{item.createAt}}</span>
      </div>
    </article>
  </div>
</template>

<script lang=ts>
import { defineComponent, PropType } from 'vue'
import { PostProps } from '@/testData'
export default defineComponent({
  name: 'PostList',
  props: {
    item: {
      required: true,
      type: Object as PropType<PostProps>
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
