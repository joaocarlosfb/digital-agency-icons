import React from 'react';

export interface PersonalComputerLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const PersonalComputerLine: React.FC<PersonalComputerLineProps> = ({
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
      <path d="M21 16.4999V4.8999H3V16.4999H10.5V19.4999H7.5V20.9999H16.5V19.4999H13.5V16.4999H21ZM4.5 6.3999H19.5V14.9999H4.5V6.3999Z" fill={color} />
    </svg>
  );
};

PersonalComputerLine.displayName = 'PersonalComputerLine';
