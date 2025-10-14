<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface PublicOfferingLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  'aria-label'?: string;
  title?: string;
}

const props = withDefaults(defineProps<PublicOfferingLineProps>(), {
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
    <path d="M5 22H3.5V2.5L22 9.5L5 16.5V22ZM5 4.7V14.9L17.9 9.6L5 4.7Z" :fill="color" />
  </svg>
</template>
