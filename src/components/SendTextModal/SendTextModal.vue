<script setup lang="ts">
</script>


<template>
    <v-dialog max-width="600">
        <template #activator="{ props: activatorProps }">
            <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Исследовать текст"
                    variant="flat"
            ></v-btn>
        </template>

        <template #default="{ isActive }">
            <v-card title="Исследовать текст">
                <v-card-text>
                  <v-textarea
                    label="Текст"
                    variant="outlined"
                    placeholder="Вставьте текст, который хотите исследовать"
                  />
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            text="Отправить"
                            color="surface-variant"
                            variant="flat"
                            @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>


<style module lang="scss"></style>