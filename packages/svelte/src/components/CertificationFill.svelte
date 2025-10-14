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
  <path d="M1.5 20H22.5V4H1.5V20ZM12.5 8.1H19V9.4H12.5V8.1ZM12.5 11.3H19V12.6H12.5V11.3ZM12.5 14.6H19V15.9H12.5V14.6ZM5 8.1H10.5V15.9H9.6H5V8.1Z" fill={color} />
</svg>
