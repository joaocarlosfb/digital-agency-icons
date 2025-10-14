import React from 'react';

export interface TransactionsLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const TransactionsLine: React.FC<TransactionsLineProps> = ({
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
      <path d="M4.79844 7.7L6.99844 10L5.99844 11L1.89844 7L5.99844 3L6.99844 4L4.79844 6.2H20.9984V7.7H4.79844ZM17 13L18 12L22.1 16L18 20L17 19L19.2 16.7H3V15.2H19.2L17 13Z" fill={color} />
    </svg>
  );
};

TransactionsLine.displayName = 'TransactionsLine';
