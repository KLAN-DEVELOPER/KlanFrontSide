<script setup lang="ts">

import {ref} from "vue";
import {mdiMagnify} from "@mdi/js";

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

const search = ref('')

</script>

<template>
    <v-card>
    <template #text>
        <v-text-field
            v-model="search"
            label="Search"
            :prepend-inner-icon="mdiMagnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
    </template>

    <v-data-table
        :headers="headers as any[]"
        :items="items"
        :search="search"
        :hide-default-footer="true"
    />
</v-card>

</template>


<style module lang="scss">

</style>