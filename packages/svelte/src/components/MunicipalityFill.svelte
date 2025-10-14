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
  <path d="M16.5 21.9V19.5L20.1 14.9L9.5 6.6L8 7.8V2H22V21.9H16.5ZM15 10H19V8.5H15V10ZM11.5 6.5H19V5H11.5V6.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.1L17.1 16.3L15 14.7V22H4V14.8L1.9 16.4ZM8 16V19H11V16H8Z" fill={color} />
</svg>
