import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import './index.css'
import store from './store';

const app = createApp(App)

app.use(store).use(router)
app.mount('#app')
