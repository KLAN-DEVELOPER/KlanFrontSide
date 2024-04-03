<script setup lang="ts">
  export interface ElementData {
      icon?: string;
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
  <div :class="$style.container">
      <div
        v-for="(el, index) in list"
        :key="index"
        :class="$style.option"
        @click="$emit('onSelect', el.name)"
      >
          <img v-if="el.icon" :src="el.icon" alt=""/>
          <span>{{el.text}}</span>
      </div>
  </div>
</template>


<style module lang="scss">
.container {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: max-content;
  min-width: 150px;
  position: absolute;
  z-index: 5;
}

.option {
  border: 1px dashed purple;
  cursor: pointer;
  padding: 5px;
  display: flex;
  gap: 15px;

  & img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: var(--hover);
  }
}
</style>