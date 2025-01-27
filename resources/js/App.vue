<script lang="ts" setup>
import Navbar from './views/layout/Navbar.vue';
</script>
<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>
</template>
