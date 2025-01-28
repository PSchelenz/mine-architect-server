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
  label?: string;
  placeholder?: string;
  options?: Option[];
  modelValue: string | number | null;
  withSearch?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option',
  modelValue: null,
  withSearch: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const isOpen = ref(false);
const searchQuery = ref('');

const selectedOption = computed<Option | undefined>(() => {
  return props.options?.find((option) => option.value === props.modelValue);
});

const filteredOptions = computed<Option[] | undefined>(() => {
  if (!searchQuery.value) {
    return props.options;
  }

  return props.options?.filter((option) => {
    return option.label.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) searchQuery.value = '';
};

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value);
  isOpen.value = false;
  searchQuery.value = '';
};

function clickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (!isOpen.value && !target.closest('.select')) {
    isOpen.value = false;
    searchQuery.value = '';
  }
}

onMounted(() => {
  document.addEventListener('click', clickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', clickOutside);
});
</script>
<template>
  <div class="form-field">
    <label v-if="label" :for="id">{{ label }}</label>

    <div :id="id" class="select">
      <div class="select-toggle form-control" @click="toggleDropdown">
        <span :class="{ placeholder: !selectedOption }">
          {{ selectedOption?.label || placeholder }}
        </span>
        <I :icon="faChevronDown" size="xs" />
      </div>
      <Transition name="fade-to-top">
        <div class="select-dropdown" v-show="isOpen">
          <div v-if="withSearch" class="select-search form-field">
            <input
              type="text"
              v-model="searchQuery"
              class="form-control flexible !w-full"
              @click.stop
              placeholder="Search..."
            />
          </div>

          <ul>
            <li
              v-for="option in filteredOptions"
              :key="option.value"
              @click="selectOption(option)"
              :class="{ selected: option.value === modelValue }"
            >
              {{ option.label }}
            </li>
            <li v-if="!filteredOptions || filteredOptions.length === 0">No results found</li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>
