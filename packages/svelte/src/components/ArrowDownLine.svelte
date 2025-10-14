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
  <path d="M12 17.1L3 8L4 7L12 15L20 7L21 8L12 17.1Z" fill={color} />
</svg>
