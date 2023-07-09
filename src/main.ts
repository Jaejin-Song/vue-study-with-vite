import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  },
  thanks: {
    thankyou: 'trans-thank',
    ohne: 'japan'
  }
})

app.mount('#app')
