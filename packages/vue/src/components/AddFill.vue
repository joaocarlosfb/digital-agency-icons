<script setup lang="ts">
import { computed, type StyleValue } from 'vue';

export interface AddFillProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: StyleValue;
  'aria-label'?: string;
  title?: string;
}

const props = withDefaults(defineProps<AddFillProps>(), {
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
    <path d="M13.0008 10.9998V2.7998H11.0008V10.9998H2.80078V12.9998H11.0008V21.1998H13.0008V12.9998H21.2008V10.9998H13.0008Z" :fill="color" />
  </svg>
</template>
