<script setup lang="ts">
import DefaultTable, {TableHeader} from "../UI/table/DefaultTable.vue";


const headers: TableHeader[] = [
    {title: 'Лексемма', value: 'lemma'},
    {title: 'Часть речи', value: 'speechPart'},
    {title: 'Найдено', value: 'count'},
]

const data = [
    {
        lemma: 'Лексема 1',
        speechPart: 'Инф',
        count: 5
    },
    {
        lemma: 'Лексема 2',
        speechPart: 'Глаг',
        count: 1
    },
    {
        lemma: 'Лексема 3',
        speechPart: 'Союз',
        count: 10
    },
]

</script>

<template>
  <DefaultTable
  :headers="headers"
  :items="data"
  :class="$style.table"
  />
</template>

<style module lang="scss">
.table {
  margin-top: 10px
}
</style>