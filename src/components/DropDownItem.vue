<template>
  <li class="dropdown-option" :class="{'disable-pointer': disable}">
    <slot></slot>
  </li>
</template>

<script lang=ts>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style >
.dropdown-option.disable-pointer *{
  color:red ;
  pointer-events: none;
}
</style>
