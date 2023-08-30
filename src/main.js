import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/global.css'; // Import the global stylesheet


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
