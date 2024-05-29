<script setup lang="ts">

export interface TableHeader {
    title: string
    value?: string
    key?: string
}

interface DefaultTableProps {
    headers: TableHeader[];
    items: any[];
}

defineProps<DefaultTableProps>()
</script>

<template>
    <v-data-table
        :headers="headers as any[]"
        :items="items"
    />
</template>


<style module lang="scss">

</style>