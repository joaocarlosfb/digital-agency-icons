import React from 'react';

export interface ArrowRightFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ArrowRightFill: React.FC<ArrowRightFillProps> = ({
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
      <path d="M9.00156 2.6001L7.60156 4.0001L15.6016 12.0001L7.60156 20.0001L9.00156 21.4001L18.4016 12.0001L9.00156 2.6001Z" fill={color} />
    </svg>
  );
};

ArrowRightFill.displayName = 'ArrowRightFill';
