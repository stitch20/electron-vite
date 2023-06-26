import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Quasar, { plugins: {} })
app.mount('#app')
