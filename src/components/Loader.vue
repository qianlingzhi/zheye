<template>
  <teleport to="#load">
    <div class="mask">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script lang=ts>
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  setup () {
    const node = document.createElement('div')
    node.id = 'load'
    const body = document.getElementsByTagName('body')[0]
    body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
  }
})
</script>

<style   scoped>
.mask {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
