<template>
  <div>
    <h4>标题</h4>
    <validate-input></validate-input>
    <h4>内容</h4>
    <validate-input></validate-input>
  </div>
</template>

<script lang=ts>
import ValidateInput from '@/components/ValidateInput.vue'
import { defineComponent } from 'vue'
import { userStore } from '@/pinia'
export default defineComponent({
  components: {
    ValidateInput
  },
  setup () {
    const store = userStore()
    console.log(store.user)
    return {
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
