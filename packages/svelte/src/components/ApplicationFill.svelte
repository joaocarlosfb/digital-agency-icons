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
  <path d="M4 22H20V5.2L16.7 2H4V22ZM11.3 19.8L8.4 17.2L9.3 16.2L11.3 18L14.6 14.9L15.5 15.9L11.3 19.8ZM15.9 3.3L18.9 6.3H15.9V3.3ZM7 8.2H17V9.7H7V8.2ZM7 11.7H17V13.2H7V11.7Z" fill={color} />
</svg>
