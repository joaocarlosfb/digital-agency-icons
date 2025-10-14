import React from 'react';

export interface ApplicationLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ApplicationLine: React.FC<ApplicationLineProps> = ({
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
      <path d="M4 2H16.7L20 5.2V22H4V2ZM5.5 3.5V20.5H18.5V6.5H15.5V3.5H5.5ZM7 11H17V12.5H7V11ZM17 8H7V9.5H17V8ZM9.39844 15.1999L11.2984 16.8999L14.5984 13.8999L15.5984 15.0999L11.2984 18.9999L8.39844 16.2999L9.39844 15.1999Z" fill={color} />
    </svg>
  );
};

ApplicationLine.displayName = 'ApplicationLine';
