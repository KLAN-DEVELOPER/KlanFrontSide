<script setup lang="ts">
  import {mdiAlertOctagon, mdiDelete, mdiInboxArrowDown} from "@mdi/js";
  import {mdiSend} from "@mdi/js";
  import {useNavigationAsideStore} from "../../store/NavigationAsideStore.ts";

  const navigationAsideStore = useNavigationAsideStore();

  const links =  [
      [mdiInboxArrowDown, 'Inbox'],
      [mdiSend, 'Send'],
      [mdiDelete, 'Trash'],
      [mdiAlertOctagon, 'Spam'],
  ]
</script>


<template>
    <v-navigation-drawer
        v-model="navigationAsideStore.isDisplayed"
        persistent
        permanent
    >
        <v-sheet
                class="pa-4"
                color="grey-lighten-4"
        >
            <v-avatar
                    class="mb-4"
                    color="grey-darken-1"
                    size="64"
            ></v-avatar>

            <div>john@google.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
                    v-for="[icon, text] in links"
                    :key="icon"
                    :prepend-icon="icon"
                    :title="text"
                    link
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style module lang="scss">

</style>