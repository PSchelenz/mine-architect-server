<script lang="ts" setup>
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as I } from '@fortawesome/vue-fontawesome';
import { computed, onMounted, onUnmounted, ref } from 'vue';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  modelValue: string | number | null;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null];
}>();
</script>
<template>
  <div class="form-field">
    <label v-if="label" :for="id">{{ label }}</label>

    <input
      class="form-control"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />

    <p class="input-error"></p>
  </div>
</template>
