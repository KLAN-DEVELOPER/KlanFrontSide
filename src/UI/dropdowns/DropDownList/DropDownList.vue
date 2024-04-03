<script setup lang="ts">
  interface ElementData {
      text: string;
      name: string;
  }

  interface  ComponentProps {
      list: ElementData[]
  }

  defineProps<ComponentProps>()
  defineEmits<{
      onSelect: [name: string]
  }>()
</script>

<template>
  <div>
    <span v-for="(el, index) in list" :key="index" @click="$emit('onSelect', el.name)">{{el.text}}</span>
  </div>
</template>


<style module lang="scss"></style>