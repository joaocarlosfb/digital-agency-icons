<script lang="ts">
  export let size: number | string = 24;
  export let color: string = 'currentColor';
  let className: string = '';
  export { className as class };
  export let style: string = '';
  export let title: string | undefined = undefined;

  $: svgStyle = `vertical-align: middle;${style ? ' ' + style : ''}`;
  $: ariaLabel = $$props['aria-label'] as string | undefined;
  $: role = title ? 'img' : undefined;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={svgStyle}
  aria-label={ariaLabel}
  {role}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d="M4.79844 7.7L6.99844 10L5.99844 11L1.89844 7L5.99844 3L6.99844 4L4.79844 6.2H20.9984V7.7H4.79844ZM17 13L18 12L22.1 16L18 20L17 19L19.2 16.7H3V15.2H19.2L17 13Z" fill={color} />
</svg>
