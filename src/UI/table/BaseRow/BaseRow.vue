<script setup lang="ts">
import type {TermsDataInterface} from "../BaseTable/BaseTable.vue";

interface BaseRowClasses {
    containerClass?: string;
    cellClass?: string;
}

interface BaseRowProps extends BaseRowClasses{
    cells?: TermsDataInterface
}

defineProps<BaseRowProps>()
</script>

<template>
    <div :class="containerClass">
        <div :class="cellClass">{{cells?.value}}</div>
        <div :class="cellClass">{{cells?.speechPart}}</div>
        <div :class="cellClass">{{cells?.count}}</div>
    </div>
</template>

<style module lang="scss"></style>