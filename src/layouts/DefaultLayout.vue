<script setup lang="ts">
import VocabularyNavigation from "../components/VocabularyNavigation/VocabularyNavigation.vue";
</script>

<template>
    <main :class="$style.main">
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