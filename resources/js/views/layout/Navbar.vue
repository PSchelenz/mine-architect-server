<script lang="ts" setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const displayCards = ref({
  list: false,
});
</script>
<template>
  <div class="main-navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../../../../public/images/logo.png" alt="logo" />
      </router-link>
    </div>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li
          class="dropdown-link"
          @mouseenter="displayCards.list = true"
          @mouseleave="displayCards.list = false"
        >
          <router-link to="/">
            List
            <FontAwesomeIcon :icon="faChevronDown" size="sm" />
          </router-link>

          <Transition name="fade-to-top">
            <ul v-if="displayCards.list" class="submenu">
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          </Transition>
        </li>
      </ul>
    </nav>

    <div class="nav-buttons">
      <button class="btn btn-primary"><span>Sign In</span></button>
    </div>
  </div>
</template>

<style scoped>
@import '../../../scss/navbar.scss';
</style>
