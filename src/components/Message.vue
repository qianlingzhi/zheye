<template>
  <teleport to="#message">
    <div class="alert alert-warning alert-dismissible fade show" :class="classObject" role="alert">
    {{message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="destory">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  </teleport>
</template>

<script lang=ts>
import { defineComponent, PropType, ref } from 'vue'
import { destory } from './createMessage'
export type MessageType = 'success' | 'error' | 'default'
export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  setup (props) {
    const inVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    return {
      classObject,
      inVisible,
      destory
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
