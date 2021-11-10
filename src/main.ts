import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import {HttpRequest} from './utils/httpRequest'

// createApp(App).use(store).use(router).use(HttpRequest).mount('#app')
createApp(App).use(store).use(router).mount('#app')
