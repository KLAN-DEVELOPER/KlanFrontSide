<script setup lang="ts">
import DropDown from "../UI/dropdowns/DropDown/DropDown.vue";

const dropDownData = [
    {text: 'Создать', name: 'create'},
    {text: 'Открыть', name: 'open'},
    {text: 'Сохранить', name: 'save'},
    {text: 'Сохранить как', name: 'saveAs'},
]

</script>

<template>
  <DropDown title="Словарь" :list="dropDownData"/>
</template>

<style module lang="scss"></style>