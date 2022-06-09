import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import Toaster from '@meforma/vue-toaster';


import './index.css'
import 'animate.css';

const app = createApp(App)
        app.use(router)
        app.use(Toaster, {
                position: 'bottom-right',
                useDefaultCss: true,
                pauseOnHover: false
        }).provide('toast', app.config.globalProperties.$toast)
        app.use(createPinia())
        app.use(MotionPlugin)

        app.mount('#app')

