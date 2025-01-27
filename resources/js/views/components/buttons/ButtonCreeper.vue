<script lang="ts" setup>
defineProps({
  text: String,
});
</script>
<template>
  <button class="btn btn-creeper">
    <span>{{ text }}</span>
  </button>
</template>
