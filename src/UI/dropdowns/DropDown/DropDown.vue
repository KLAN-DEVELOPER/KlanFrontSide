<script setup lang="ts">
import DropDownList from "../DropDownList/DropDownList.vue";
import type {ElementData} from "../DropDownList/DropDownList.vue";

interface ComponentData {
    title: string;
    list: ElementData[]
}
defineProps<ComponentData>()
</script>


<template>
    <div :class="$style.container">
        <span :class="$style.title">{{title}}</span>
        <DropDownList :list="list"/>
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