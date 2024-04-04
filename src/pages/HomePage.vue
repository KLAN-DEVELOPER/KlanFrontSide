<script setup lang="ts">
import DropDown from "../UI/dropdowns/DropDown/DropDown.vue";
import CreateIcon from "../../public/assets/images/svgIcons/createIcon.svg"
import OpenIcon from "../../public/assets/images/svgIcons/openIcon.svg"
import SaveIcon from "../../public/assets/images/svgIcons/saveIcon.svg"
const dropDownData = [
    {text: 'Создать', name: 'create', icon: CreateIcon},
    {text: 'Открыть', name: 'open', icon: OpenIcon},
    {text: 'Сохранить', name: 'save', icon: SaveIcon},
    {text: 'Сохранить как', name: 'saveAs'},
]

</script>

<template>
    <div style="display: flex">
        <DropDown title="Словарь" :list="dropDownData"/>
        <DropDown title="Словарь" :list="dropDownData"/>
        <DropDown title="Словарь" :list="dropDownData"/>
        <DropDown title="Словарь" :list="dropDownData"/>
    </div>
</template>

<style module lang="scss"></style>