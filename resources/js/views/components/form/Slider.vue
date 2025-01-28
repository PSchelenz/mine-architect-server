<script lang="ts" setup>
import { computed } from 'vue';

interface Tooltip {
  [position: number]: string;
}

interface SliderProps {
  modelValue: number | null;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  tooltips?: Tooltip;
}

interface SliderEmits {
  (e: 'update:modelValue', value: number): void;
}

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  label: '',
  modelValue: 0,
});

const emit = defineEmits<SliderEmits>();

const updateValue = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', Number(target.value));
};

const currentTooltip = computed(() => {
  if (!props.tooltips || props.modelValue === null) return '';

  const thresholds = Object.keys(props.tooltips)
    .map(Number)
    .sort((a, b) => b - a);

  const threshold = thresholds.find((t) => t <= (props.modelValue ?? 0));

  if (threshold === undefined) return '';

  return props.tooltips[`${threshold}`];
});
</script>

<template>
  <div class="slider-container form-field">
    <div class="slider-label" v-if="label">{{ label }}</div>
    <div class="slider-wrapper">
      <span v-if="currentTooltip" class="slider-tooltip">{{ currentTooltip }}</span>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        @input="updateValue"
        class="slider"
      />
    </div>
  </div>
</template>

<style scoped>
.slider::-webkit-slider-runnable-track {
  background: linear-gradient(
    to right,
    /* everything should scale to 0% - 100% range */ #52a535 v-bind((modelValue / max) * 100 + '%'),
    #ddd v-bind((modelValue / max) * 100 + '%')
  );
  height: 12px;
}

.slider-tooltip {
  width: 80px;
  position: absolute;
  top: -30px;
  white-space: nowrap;
  left: clamp(
    calc(0% + 36px),
    calc(v-bind((modelValue / max) * 100 + '%') + 10px - calc(20px * v-bind((modelValue / max)))),
    calc(100% - 36px)
  );
  text-align: center;
  transform: translateX(-50%);
}
</style>
