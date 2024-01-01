import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import veeValidate from '@/plugins/vee-validate.js';

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.use(veeValidate)
.mount('#app')
