<script setup lang="ts">
import BaseTable from "../UI/table/BaseTable/BaseTable.vue";
import type {TermsDataInterface} from "../UI/table/BaseTable/BaseTable.vue";

const headers:string[] = ["Лексема", "Часть речи", "Количество в словаре"]
const body:TermsDataInterface[] = [
    {value: "слово", speechPart: "сущ.", count: 1},
    {value: "слово", speechPart: "глаг.", count: 2},
    {value: "слово", speechPart: "прич.", count: 3},
    {value: "слово", speechPart: "союз", count: 4},
]

</script>

<template>
  <BaseTable :headers="headers" :body="body"/>
</template>

<style module lang="scss"></style>