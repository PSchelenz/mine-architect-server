<script lang="ts" setup>
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as I } from '@fortawesome/vue-fontawesome';
import Input from '@views/components/form/Input.vue';
</script>
<template>
  <div class="page-header">
    <h2>Creations</h2>
    <p class="breadcrumbs">Home / Creations / Medieval</p>
  </div>
  <section class="creations container">
    <aside class="sidebar">
      <div class="header">
        <I :icon="faSliders" />
        <h4>Filter</h4>
      </div>
      <div class="subsection">
        <Input name="name" label="What are you looking for?" />
      </div>
    </aside>
  </section>
</template>
<style lang="scss" scoped>
@import '@styles/views/creation/creations.scss';
</style>
