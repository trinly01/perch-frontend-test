import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/fontawesome-pro/css/all.css'

import App from './App.vue'
import './index.css'

import router from './router'



const app = createApp(App)

library.add(
  fas
)
app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.mount('#app')
