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
  <path d="M19.5 4H1.5V20H22.5V7L19.5 4ZM3 18.5V5.5H18.5V8H21V18.5H3ZM7.5 12.5C8.60457 12.5 9.5 11.6046 9.5 10.5C9.5 9.39543 8.60457 8.5 7.5 8.5C6.39543 8.5 5.5 9.39543 5.5 10.5C5.5 11.6046 6.39543 12.5 7.5 12.5ZM11.5 8H17V9.5H11.5V8ZM18.6 14.5H5.5V16H18.6V14.5ZM11.5 11.1997H18.6V12.6997H11.5V11.1997Z" fill={color} />
</svg>
