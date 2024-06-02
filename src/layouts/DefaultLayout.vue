<script setup lang="ts">
import NavigationAside from "../components/NaviagtionAside/NavigationAside.vue";
import {mdiMagnify} from "@mdi/js";
import {useNavigationAsideStore} from "../store/NavigationAsideStore.ts";
import SendTextModal from "../components/SendTextModal/SendTextModal.vue";

const navigationAsideStore = useNavigationAsideStore();

</script>

<template>
    <v-container position="relative">
        <v-app-bar-nav-icon
            :prepend-icon="mdiMagnify"
            rounded="0"
            slim
            position="absolute"
            :class="$style.burger"
            @click="navigationAsideStore.toggleNavigationAside()"
        />
    </v-container>
    <NavigationAside/>
    <main :class="$style.main">
        <div :class="$style.content">
            <SendTextModal/>
            <slot/>
        </div>
    </main>
</template>

<style module lang="scss">
  .main {
    min-height: 100vh;
    position: relative;
  }

  .content {
    width: 100%;
    padding: 40px;
  }

  .burger {
      right: 0;
      top: 0;
      z-index: 5;
  }
</style>