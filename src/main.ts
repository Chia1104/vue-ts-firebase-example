import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import './index.css'
import store from './store';
import { MotionPlugin } from '@vueuse/motion'
import apolloClient from "@chia/lib/GraphQL/apolloClient";
import { DefaultApolloClient } from '@vue/apollo-composable'

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.use(store).use(router).use(MotionPlugin)
app.mount('#app')
