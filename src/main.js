import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import './index.css'

createApp(App)
        .use(router)
        .use(createPinia())
        .use(MotionPlugin)
        .mount('#app')
            
