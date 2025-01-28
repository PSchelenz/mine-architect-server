<script lang="ts" setup>
import {
  faSliders,
  faCircle,
  faEye,
  faDownload,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as I } from '@fortawesome/vue-fontawesome';
import Input from '@views/components/form/Input.vue';
import Select from '@views/components/form/Select.vue';
import Slider from '@views/components/form/Slider.vue';
import { useForm } from '@composables/useForm';

const filtersForm = useForm({
  name: '',
  category: '',
  difficulty: 0,
});
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
        <Input
          name="name"
          placeholder="What are you looking for?"
          v-model="filtersForm.values.name.value"
        />
        <Select
          class="mt-3"
          name="category"
          placeholder="Category"
          :options="[]"
          v-model="filtersForm.values.category.value"
        ></Select>
      </div>
      <div class="subsection">
        <div class="subsection-title">
          <h4>Difficulty</h4>
        </div>
        <Slider
          v-model="filtersForm.values.difficulty.value"
          :step="25"
          :tooltips="{ 0: 'Very easy', 25: 'Easy', 50: 'Medium', 75: 'Hard', 100: 'Very hard' }"
        />
      </div>
    </aside>

    <div class="creations-grid">
      <div class="creation-card">
        <div class="card-image">
          <img src="https://via.placeholder.com/300" alt="Creation" />
        </div>
        <div class="card-info">
          <div class="creator-image">
            <img src="https://via.placeholder.com/50" alt="Creator" />
          </div>
          <div class="top-info">
            <p><I :icon="faCircle" /> Medieval</p>
            <p><I :icon="faCalendar" /> 06 May, 2023</p>
          </div>
          <h5>To niezły zamek</h5>
          <div class="bottom-info">
            <div class="main-info">
              <p><I :icon="faDownload" /> 623</p>
              <p><I :icon="faEye" /> 1123</p>
            </div>
            <div class="score">4.3</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@styles/views/creation/creations.scss';
</style>
