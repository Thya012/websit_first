import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route/index.js'
import i18n from '@/i18n/index.js'
import pinia from '@/store/index.js' 


const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')

