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
  <path d="M1 10.7L1.9 11.9L4 10.2V21.5H20V10.2L22.1 11.9L23 10.7L12 2L1 10.7ZM11 18.5H8.5V16H11V18.5ZM11 14H8.5V11.5H11V14ZM13 11.5H15.5V14H13V11.5ZM13 16H15.5V18.5H13V16Z" fill={color} />
</svg>
