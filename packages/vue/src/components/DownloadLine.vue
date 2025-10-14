<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface DownloadLineProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  'aria-label'?: string;
  title?: string;
}

const props = withDefaults(defineProps<DownloadLineProps>(), {
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
    <path d="M18 9L19 10L12 17.1L5 10L6 9L11.2 14.2V3H12.7V14.2L18 9ZM3 21V19.5H21V21H3Z" :fill="color" />
  </svg>
</template>
