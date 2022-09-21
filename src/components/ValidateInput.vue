<template>
  <div class="form-floating mb-3  ">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" :value="inputRef.val"
      @blur="validateInput" @input="updateValue" v-bind="$attrs">
    <label v-if="$attrs.label" for="floatingInput">{{$attrs.label}}</label>
    <div class="invalid-feedback " style="text-align:left;display: block;" v-if="inputRef.error">
      {{inputRef.message}}
    </div>
  </div>
</template>

<script lang=ts>
import { reactive, PropType, defineComponent, onMounted } from 'vue'
import { mitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type: 'required' | 'email' | 'custom',
  message: string,
  action?: () => boolean
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, { emit }) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    inputRef.val = props.modelValue as string
    const updateValue = (e:Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((item) => {
          let passed = true
          inputRef.message = item.message
          switch (item.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'custom':
              if (item.action) {
                passed = item.action()
              }
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        console.log(inputRef)
      }
      return !inputRef.error
    }
    onMounted(() => {
      mitter.emit('form-item-created', validateInput)
    })
    return {
      validateInput,
      inputRef,
      updateValue
    }
  }
})
</script>

<style scoped>

</style>
