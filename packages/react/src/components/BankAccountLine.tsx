import React from 'react';

export interface BankAccountLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const BankAccountLine: React.FC<BankAccountLineProps> = ({
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
      <path d="M2 17.2V4H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.2ZM20.5 7V5.5H3.5V7H20.5ZM4.7 18.5H19.2C19.9 18.5 20.5 17.9 20.5 17.3V8.5H3.5V17.3C3.5 17.9 4 18.5 4.7 18.5ZM11.9992 12.4L13.5992 9.5H14.7992L13.0992 12.5H14.4992V13.5H12.4992V14.5H14.4992V15.5H12.4992V17H11.4992V15.5H9.49922V14.5H11.4992V13.5H9.49922V12.5H10.8992L9.19922 9.5H10.3992L11.9992 12.4Z" fill={color} />
    </svg>
  );
};

BankAccountLine.displayName = 'BankAccountLine';
