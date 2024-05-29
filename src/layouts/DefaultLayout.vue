<script setup lang="ts">
import NavigationAside from "../components/NaviagtionAside/NavigationAside.vue";
import {mdiMagnify} from "@mdi/js";
</script>

<template>
    <v-container position="relative">
        <v-app-bar-nav-icon
            :prepend-icon="mdiMagnify"
            rounded="0"
            slim
            position="absolute"
            :class="$style.burger"
        />
    </v-container>
    <NavigationAside/>
    <main :class="$style.main">
        <div :class="$style.content">
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