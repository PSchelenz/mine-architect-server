<script lang="ts" setup>
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

    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>
