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
  <path d="M4.80078 19.1998H19.2008V12.7998H21.2008V21.1998H2.80078V2.7998H11.2008V4.7998H4.80078V19.1998ZM13.7016 4.7998V2.7998H21.2016V10.2998H19.2016V6.1998L10.5016 14.8998L9.10156 13.4998L17.8016 4.7998H13.7016Z" fill={color} />
</svg>
