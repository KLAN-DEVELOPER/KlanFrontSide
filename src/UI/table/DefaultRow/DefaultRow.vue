<script setup lang="ts">
import BaseRow from "../BaseRow/BaseRow.vue";
</script>

<template>
  <BaseRow
    :container-class="$style.container"
    :cell-class="$style.cell"
  />
</template>


<style module lang="scss">
  .container {}
  .cell {}
</style>