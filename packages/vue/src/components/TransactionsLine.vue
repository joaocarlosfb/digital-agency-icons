<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface TransactionsLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  'aria-label'?: string;
  title?: string;
}

const props = withDefaults(defineProps<TransactionsLineProps>(), {
  size: 24,
  color: 'currentColor',
});

const svgStyle = computed(() => {
  const baseStyle: StyleValue = { verticalAlign: 'middle' };
  if (props.style) {
    if (typeof props.style === 'string') {
      return baseStyle;
    }
    return { ...baseStyle, ...props.style };
  }
  return baseStyle;
});

const svgAttrs = computed(() => {
  const attrs: Record<string, any> = {};
  if (props['aria-label']) {
    attrs['aria-label'] = props['aria-label'];
  }
  if (props.title) {
    attrs.role = 'img';
  }
  return attrs;
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    :style="svgStyle"
    v-bind="svgAttrs"
  >
    <title v-if="title">{{ title }}</title>
    <path d="M4.79844 7.7L6.99844 10L5.99844 11L1.89844 7L5.99844 3L6.99844 4L4.79844 6.2H20.9984V7.7H4.79844ZM17 13L18 12L22.1 16L18 20L17 19L19.2 16.7H3V15.2H19.2L17 13Z" :fill="color" />
  </svg>
</template>
