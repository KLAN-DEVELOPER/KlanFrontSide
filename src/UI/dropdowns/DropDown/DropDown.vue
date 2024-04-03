<script setup lang="ts">
import DropDownList from "../DropDownList/DropDownList.vue";

interface ElementData {
    text: string;
    name: string;
}

interface ComponentData {
    title: string;
    list: ElementData[]
}
defineProps<ComponentData>()
</script>


<template>
    <div>
        <span>{{title}}</span>
        <DropDownList :list="list"/>
    </div>
</template>


<style module lang="scss"></style>