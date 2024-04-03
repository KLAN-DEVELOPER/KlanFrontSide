<script setup lang="ts">

const navLinks = [
    {href: '/terms', text: 'Термины'},
    {href: '/wordcomplexes', text: 'Словокомплексы'},
    {href: 'stoptermins', text: 'Стоп-термины'},
    {href: 'stoptcomplex', text: 'Стоп-словокомплексы'},
]
</script>


<template>
  <nav :class="$style.nav">
    <RouterLink
      v-for="(link, index) in navLinks"
      :key="index"
      :to="link.href"
      :class="$style.navLink"
    >
        <span>{{link.text}}</span>
    </RouterLink>
  </nav>
</template>

<style module lang="scss">
  .nav {
    border: 1px solid black;
    display: flex;
    gap: 10px;
  }

  .navLink {
    text-decoration: none;
    font-family: sans-serif;
    color: var(--text);
    padding: 10px;
  }
</style>