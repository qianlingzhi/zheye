<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="btn" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">
          登录
        </button>
      </slot>
    </div>
  </form>
</template>

<script lang=ts>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () =>boolean
type Events = { 'form-item-created': ValidateFunc}
export const mitter = mitt<Events>()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    mitter.on('form-item-created', callback)
    onUnmounted(() => {
      mitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
