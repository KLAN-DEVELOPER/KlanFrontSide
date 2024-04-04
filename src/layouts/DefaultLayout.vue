<script setup lang="ts">
import VocabularyNavigation from "../components/VocabularyNavigation/VocabularyNavigation.vue";
import ApplicationMenu from "../components/ApplicationMenu/ApplicationMenu.vue";
</script>

<template>
    <main :class="$style.main">
        <ApplicationMenu/>
        <VocabularyNavigation/>
        <div :class="$style.content">
            <slot/>
        </div>
    </main>
</template>

<style module lang="scss">
  .main {
    min-height: 100vh;
  }

  .content {
    width: 100%;
    padding: 40px;
  }
</style>