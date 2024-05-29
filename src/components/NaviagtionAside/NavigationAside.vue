<script setup lang="ts">
  import {useNavigationAsideStore} from "../../store/NavigationAsideStore.ts";
  import {useUserDataStore} from "../../store/UserDataStore.ts";

  const navigationAsideStore = useNavigationAsideStore();
  const userDataStore = useUserDataStore();

  const links =  [
      {text: 'Термины', path: 'terms'},
      {text: 'Словокомплексы', path: 'wordcomplexes'},
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
                    color="orange-darken-1"
                    size="64"
            >
                {{userDataStore.getEmailFirstLetter}}
            </v-avatar>

            <div>{{userDataStore.email}}</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <RouterLink v-for="(link, index) in links"  :key="index" :to="link.path" :class="$style.link">
            <v-list-item
                    :title="link.text"
                    link
            ></v-list-item>
            </RouterLink>
        </v-list>
    </v-navigation-drawer>
</template>

<style module lang="scss">
    .link {
        text-decoration: none;
    }
</style>