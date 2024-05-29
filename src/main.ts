import { createApp } from 'vue'
import {router} from "./router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import App from './App.vue'
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TestLayout from "./layouts/TestLayout.vue";

import './styles/main.scss'
import {createPinia} from "pinia";


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives
})

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)
app.component('TestLayout', TestLayout)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')