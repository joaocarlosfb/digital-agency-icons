import React from 'react';

export interface MailingLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const MailingLine: React.FC<MailingLineProps> = ({
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
      <path d="M15.5 2.5C19.1 2.6 22 5.6 22 9.2V17H13V22H11V17H8.6H2V8.9C2 5.4 4.9 2.5 8.5 2.5H15.5ZM3.5 8.9V15.5H8.6V9.2C8.6 7.1 9.5 5.2 11 4H8.4C5.7 4 3.5 6.2 3.5 8.9ZM11.1 15.5H20.4V9.2C20.4 6.3 18.1 4 15.2 4C12.3 4 10 6.3 10 9.2V15.5H11.1ZM12.3008 9.3999H18.6008V10.8999H12.3008V9.3999Z" fill={color} />
    </svg>
  );
};

MailingLine.displayName = 'MailingLine';
