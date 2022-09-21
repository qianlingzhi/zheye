<template>
  <div class="login-page mx-auto w-330">
    <div class="mb-30">欢迎注册者也</div>
    <validate-form @form-submit="onFromSubmit">
      <validate-input :rules="nicknameRules" v-model="nicknameValue" placeholder="12321" label="昵称"></validate-input>
      <validate-input ref="inputRef" :rules="emailRules" v-model="emailValue" placeholder="12321" label="Email address"
        type=" "></validate-input>
      <validate-input :rules="passwordRules" v-model="passwordValue" placeholder="12321" label="Password"
        type="password"></validate-input>
      <validate-input :rules="rePasswordRules" v-model="rePasswordValue" placeholder="12321" label="rePassword"
        type="password"></validate-input>
      <template #submit>
        <button type="button" class="btn btn-primary">注册</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang=ts>
import { Component, defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { userStore } from '@/pinia'
import router from '@/router'
import createMessage from '@/components/createMessage'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<Component>()
    const nicknameValue = ref('')
    const nicknameRules: RulesProp = [
      { type: 'required', message: '昵称不能为空' }
    ]
    const emailValue = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordValue = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const rePasswordValue = ref('')
    const rePasswordRules: RulesProp = [
      { type: 'required', message: '重复密码不能为空' },
      {
        type: 'custom',
        message: '密码不相同',
        action: () => {
          return rePasswordValue.value === passwordValue.value
        }
      }
    ]
    const onFromSubmit = (result: boolean) => {
      if (result) {
        const store = userStore()
        store.register({ email: emailValue.value, password: passwordValue.value, nickName: nicknameValue.value }).then(() => {
          createMessage('注册成功 正在跳转登录页面', 'success', 2000)
          setTimeout(() => { router.push('/login') }, 2000)
        }).catch((data) => {
          console.log(data)
          createMessage(data.response.data.error, 'error', 2000)
        })
      }
    }
    return {
      emailRules,
      onFromSubmit,
      emailValue,
      passwordValue,
      passwordRules,
      inputRef,
      nicknameValue,
      nicknameRules,
      rePasswordRules,
      rePasswordValue
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
