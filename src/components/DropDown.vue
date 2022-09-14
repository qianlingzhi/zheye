<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggled">{{title}}</a>
    <ul class="dropdown-menu" style="display: block;" v-if="isShow">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang=ts>
import { defineComponent, ref, watch } from 'vue'
import userClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup () {
    const isShow = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggled = () => {
      isShow.value = !isShow.value
    }
    const isClickOutside = userClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isShow.value && isClickOutside.value) {
        isShow.value = false
      }
    })
    return {
      isShow,
      toggled,
      dropdownRef
    }
  }
})
</script>

<style  lang="scss" scoped>

</style>
