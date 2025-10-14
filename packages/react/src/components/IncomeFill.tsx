import React from 'react';

export interface IncomeFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const IncomeFill: React.FC<IncomeFillProps> = ({
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
      <path d="M13.3008 13C14.7008 13 15.8008 14.3 15.5008 15.7C18.7008 15 21.2008 12.1 21.2008 8.7C21.2008 4.7 18.0008 1.5 14.0008 1.5C10.0008 1.5 6.80078 4.7 6.80078 8.7C6.80078 10.3 7.30078 11.8 8.20078 13H13.3008ZM16.5008 8V9H14.5008V10H16.5008V11H14.5008V12H13.5008V11H11.5008V10H13.5008V9H11.5008V8H12.9008L11.2008 5H12.3008L14.0008 7.9L15.6008 5H16.7008L15.0008 8H16.5008Z" fill={color} />
    </svg>
  );
};

IncomeFill.displayName = 'IncomeFill';
