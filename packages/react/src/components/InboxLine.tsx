import React from 'react';

export interface InboxLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const InboxLine: React.FC<InboxLineProps> = ({
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
      <path d="M2 4V20H22V4H2ZM20.4 5.5L12 11.9L3.6 5.5H20.4ZM3.5 18.5V7.3L12 13.8L20.5 7.3V18.5H3.5Z" fill={color} />
    </svg>
  );
};

InboxLine.displayName = 'InboxLine';
