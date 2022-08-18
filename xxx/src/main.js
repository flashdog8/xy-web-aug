import { createApp } from 'vue'

import App from './App'
import store from './store'
import router from './router'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss' // global css

import '@/interceptor'

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

const app = createApp(App)

app.use(ElementUI)

app.config.productionTip = false
app.use(router)
app.use(store)
app.mount('#app')
