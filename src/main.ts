import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import './index.css'
import store from './store';
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(store).use(router).use(MotionPlugin)
app.mount('#app')
