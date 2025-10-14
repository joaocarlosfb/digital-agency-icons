import React from 'react';

export interface CertificationWithSealFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const CertificationWithSealFill: React.FC<CertificationWithSealFillProps> = ({
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
      <path d="M16.7 2H4V22H20V5.2L16.7 2ZM11.5 15.6H7V14.3H11.5V15.6ZM15 20C13.9 20 13 19.1 13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20ZM17 12.7H7V11.4H17V12.7ZM17 9.6H7V8.3H17V9.6ZM15.9 6.3V3.3L18.9 6.3H15.9Z" fill={color} />
    </svg>
  );
};

CertificationWithSealFill.displayName = 'CertificationWithSealFill';
