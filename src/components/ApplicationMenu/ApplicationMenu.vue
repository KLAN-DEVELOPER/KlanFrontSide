<script setup lang="ts">
import DropDown from "../../UI/dropdowns/DropDown/DropDown.vue";
import CreateIcon from "../../../public/assets/images/svgIcons/createIcon.svg";
import OpenIcon from "../../../public/assets/images/svgIcons/openIcon.svg";
import SaveIcon from "../../../public/assets/images/svgIcons/saveIcon.svg";

const vocabularyOptions = [
    {text: 'Создать', name: 'create', icon: CreateIcon},
    {text: 'Открыть', name: 'open', icon: OpenIcon},
    {text: 'Сохранить', name: 'save', icon: SaveIcon},
    {text: 'Сохранить как', name: 'saveAs'},
]
const serviceOptions = [
    {text: 'Обработать текст', name: 'analyze'},
]

</script>

<template>
    <div :class="$style.container">
        <DropDown title="Словарь" :list="vocabularyOptions"/>
        <DropDown title="Сервис"  :list="serviceOptions"/>
    </div>
</template>


<style module lang="scss">
.container {
    display: flex;
}
</style>