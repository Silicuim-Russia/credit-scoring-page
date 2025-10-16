import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './styles/fonts.css'
import './styles/main.css'
import './styles/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
