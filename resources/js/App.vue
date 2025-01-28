<script lang="ts" setup>
import { computed } from 'vue';
import Navbar from './views/layout/Navbar.vue';
import { routeLike, currentRouteLike } from '@router/utils/routerUtils';
import { useRouter } from 'vue-router';

const router = useRouter();

const mainClasses = computed(() => {
  return currentRouteLike('home') ? '' : 'bg-light';
});
</script>
<template>
  <header>
    <Navbar />
  </header>

  <main :class="mainClasses">
    <router-view />
  </main>
</template>
