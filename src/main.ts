import { createApp } from 'vue'
import {router} from "./router";

import App from './App.vue'
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TestLayout from "./layouts/TestLayout.vue";

import './styles/main.scss'
import {createPinia} from "pinia";

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)
app.component('TestLayout', TestLayout)
app.use(createPinia())
app.use(router)
app.mount('#app')