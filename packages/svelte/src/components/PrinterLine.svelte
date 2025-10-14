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
  <path d="M19 7V3H5V7H2V17H5V21H19V17H22V7H19ZM6.5 4.5H17.5V7H6.5V4.5ZM17.5 19.5H6.5V12.5H17.5V19.5ZM20.5 15.5H19V11H5V15.5H3.5V8.5H20.5V15.5ZM8 17.7002H16V17.0002V16.7002H8V17.7002ZM8 14.2998H16V15.2998H8V14.2998Z" fill={color} />
</svg>
