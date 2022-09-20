<template>
  <div class="login-page mx-auto w-330">
    <div class="mb-30">欢迎登陆者也</div>
    <validate-form @form-submit="onFromSubmit">
      <validate-input ref="inputRef" :rules="emailRules" v-model="emailValue" placeholder="12321" label="Email address" type=" "></validate-input>
      <validate-input :rules="passwordRules" v-model="passwordValue" placeholder="12321" label="Password" type="password"></validate-input>
      <template #submit >
        <button type="button" class="btn btn-primary">登录</button>
      </template>
    </validate-form>
    <a class="mt-30 mb-30" href="">还没有账户？去注册一个新的吧！</a>
  </div>
</template>

<script lang=ts>
import { Component, defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { userStore } from '@/pinia'
import router from '@/router'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<Component>()
    const emailValue = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordValue = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFromSubmit = (result: boolean) => {
      if (result) {
        const store = userStore()
        store.login({ email: emailValue.value, password: passwordValue.value }).then(() => { router.back() })
      }
    }
    return {
      emailRules,
      onFromSubmit,
      emailValue,
      passwordValue,
      passwordRules,
      inputRef
    }
  }
})
</script>

<style scoped>
.w-330 {
  width: 330px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mt-30 {
  margin-top: 30px;
  display: block;
}

.tips {
  text-align: left;
}
</style>
