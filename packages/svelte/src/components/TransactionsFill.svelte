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
  <path d="M5.40156 8.0001L7.40156 10.0001L6.00156 11.4001L1.60156 7.0001L6.00156 2.6001L7.40156 4.0001L5.40156 6.0001H21.2016V8.0001H5.40156ZM16.6031 13.0001L18.0031 11.6001L22.4031 16.0001L18.0031 20.4001L16.6031 19.0001L18.6031 17.0001H2.70312V15.0001H18.6031L16.6031 13.0001Z" fill={color} />
</svg>
