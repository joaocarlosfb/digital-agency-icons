import React from 'react';

export interface PrinterLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const PrinterLine: React.FC<PrinterLineProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  'aria-label': ariaLabel,
  title,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ verticalAlign: 'middle', ...style }}
      aria-label={ariaLabel}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      <path d="M19 7V3H5V7H2V17H5V21H19V17H22V7H19ZM6.5 4.5H17.5V7H6.5V4.5ZM17.5 19.5H6.5V12.5H17.5V19.5ZM20.5 15.5H19V11H5V15.5H3.5V8.5H20.5V15.5ZM8 17.7002H16V17.0002V16.7002H8V17.7002ZM8 14.2998H16V15.2998H8V14.2998Z" fill={color} />
    </svg>
  );
};

PrinterLine.displayName = 'PrinterLine';
