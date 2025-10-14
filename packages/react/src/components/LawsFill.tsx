import React from 'react';

export interface LawsFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const LawsFill: React.FC<LawsFillProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  'aria-label': ariaLabel,
  title,
}) => {
  const svgProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { verticalAlign: 'middle', ...style },
  };

  if (ariaLabel) {
    svgProps['aria-label'] = ariaLabel;
  }

  if (title) {
    svgProps.role = 'img';
  }

  return (
    <svg {...svgProps}>
      {title && <title>{title}</title>}
      <path d="M11.8008 4.8L14.6008 2L20.2008 7.7L17.4008 10.5L11.8008 4.8ZM9.67578 6.93799L10.7364 5.87734L22.05 17.1909L20.9894 18.2516L9.67578 6.93799ZM3 19.5H16V21H3V19.5ZM8.59922 8L5.69922 10.8L11.3992 16.5L14.1992 13.7L8.59922 8Z" fill={color} />
    </svg>
  );
};

LawsFill.displayName = 'LawsFill';
