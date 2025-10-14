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
  <path d="M3 21V3H21V21H3ZM6 18H11V13H6V18ZM6 11H11V6H6V11ZM18 6H13V11H18V6ZM13 18H18V13H13V18ZM14.1992 7.2002H16.6992V9.7002H14.1992V7.2002ZM7.19922 14.2002H9.69922V16.7002H7.19922V14.2002ZM9.69922 7.2002H7.19922V9.7002H9.69922V7.2002Z" fill={color} />
</svg>
