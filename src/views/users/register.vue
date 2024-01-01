<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import inputText from '@/components/input-text.vue';
import inputSelect from '@/components/input-select.vue'
import ajax from '@/wrapper/ajax.js'
import { ref } from 'vue'

const id = ref('')
const nickname = ref('')
const email = ref('')
const password = ref('')
const confirmEmail = ref('')
const passwordConfirm = ref('')
const gender = ref('')

const schema = {
  id: 'required',
  nickname: 'required',
  email: 'email|required',
  confirmEmail: 'required',
  password: 'required',
  passwordConfirm: (value)=> {
    if(!value || password.value !== value){
       return '비밀번호가 일치하지 않습니다.'
    }

    return true
  },
  gender: 'required'

}

function onSubmit(values) {
  
}
</script>

<template>
  <div class="w-1/3">
    <Form class="flex w-full flex-col gap-y-5 border-none rounded-md p-5" @submit="onSubmit" :validation-schema="schema">
      <input-text name="id" v-model="id" label="ID" />
      <input-text name="nickname" v-model="nickname" label="Nickname" />
      <input-text name="email" v-model="email" label="Email" />
      <input-text name="confirmEmail" v-model="confirmEmail" label="인증번호" />
      <input-text name="password" v-model="password" label="Password" type="password"/>
      <input-text name="passwordConfirm" v-model="passwordConfirm" label="Password Confirm" type="password" />
      <input-select name="gender" v-model="gender" label="Gender" />
      <button>submit</button>
    </Form>
  </div>
</template>
