import React from 'react';

export interface ArrowLeftFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ArrowLeftFill: React.FC<ArrowLeftFillProps> = ({
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
      <path d="M7.90156 12.0001L15.9016 4.0001L14.5016 2.6001L5.10156 12.0001L14.5016 21.4001L15.9016 20.0001L7.90156 12.0001Z" fill={color} />
    </svg>
  );
};

ArrowLeftFill.displayName = 'ArrowLeftFill';
