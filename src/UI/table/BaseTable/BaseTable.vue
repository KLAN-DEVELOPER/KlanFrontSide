<script setup lang="ts">
import DefaultRow from "../DefaultRow/DefaultRow.vue";

export interface TermsDataInterface {
  value: string;
  speechPart: string;
  count: number;
}

interface BaseTableProps {
    headers: string[];
    body: TermsDataInterface[];
}
defineProps<BaseTableProps>()
</script>


<template>
  <div :class="$style.container">
    <div class="header">
      <div v-for="(header, index) in headers" :key="index">
          {{header}}
      </div>
    </div>
    <div class="body">
        <DefaultRow v-for="(data, index) in body" :key="index" :cells="data"/>
    </div>
  </div>
</template>


<style module lang="scss">
.container {

}
</style>