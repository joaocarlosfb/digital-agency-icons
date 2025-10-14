import React from 'react';

export interface AttentionFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const AttentionFill: React.FC<AttentionFillProps> = ({
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
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM11.3 6.5H12.8V14H11.3V6.5ZM12 15.5C12.6 15.5 13 15.9 13 16.5C13 17.1 12.6 17.5 12 17.5C11.4 17.5 11 17.1 11 16.5C11 15.9 11.4 15.5 12 15.5Z" fill={color} />
    </svg>
  );
};

AttentionFill.displayName = 'AttentionFill';
