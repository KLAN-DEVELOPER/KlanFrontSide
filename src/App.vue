<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import { computed } from 'vue'




const route = useRoute()

const layout = computed(() => {
    return route.meta.layout || 'DefaultLayout'
})
</script>

<template>
    <v-app>
        <component :is="layout">
            <RouterView />
        </component>
    </v-app>
</template>
