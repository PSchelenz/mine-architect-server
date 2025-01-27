<script lang="ts" setup>
import Select from '@components/form/Select.vue';
import { ref } from 'vue';

const category = ref('');
</script>

<template>
  <section class="banner-section">
    <div class="home-banner container">
      <div class="banner-content">
        <div class="explore-text">Explore top-rated attractions</div>

        <h1>Let us help you <br /><span class="text-green">Find, Buy</span> & Own Dreams</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters.
        </p>

        <Select
          id="category"
          name="category"
          v-model="category"
          placeholder="Choose category"
        ></Select>
      </div>
    </div>
  </section>

  <section class="categories-section container">
    <div class="header">
      <div class="title">
        <h3>Categories</h3>
        <p>Choose a category that best suits your needs</p>
      </div>
      <div class="buttons-container">
        <router-link :to="{ name: 'categories.index' }">
          <button class="btn btn-outline-primary">View all</button>
        </router-link>
      </div>
    </div>
    <div class="categories-grid">
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
      <div class="category-card">
        <p class="card-title">Medieval</p>
        <p class="category-items-count">32 creations</p>
        <div class="category-icon">
          <img src="#" alt="Category Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@styles/views/home.scss';
</style>
