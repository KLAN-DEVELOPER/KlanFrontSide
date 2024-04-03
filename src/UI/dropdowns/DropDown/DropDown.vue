<script setup lang="ts">
import DropDownList from "../DropDownList/DropDownList.vue";
import type {ElementData} from "../DropDownList/DropDownList.vue";
import {useDropDown} from "../../../hooks/useDropDown.ts";

interface ComponentData {
    title: string;
    list: ElementData[]
}
const {isOpen, toggleList, hideList} = useDropDown()
defineProps<ComponentData>()
</script>


<template>
    <div :class="$style.container">
        <span :class="$style.title" @click="toggleList">{{title}}</span>
        <DropDownList v-if="isOpen" :list="list" @on-select="hideList"/>
    </div>
</template>


<style module lang="scss">
.container {
    user-select: none;
    border: 1px solid black;
    width: max-content;
    position: relative;
}

.title {
    cursor: pointer;
    padding: 5px;
}
</style>