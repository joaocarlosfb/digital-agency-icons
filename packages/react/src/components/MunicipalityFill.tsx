import React from 'react';

export interface MunicipalityFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const MunicipalityFill: React.FC<MunicipalityFillProps> = ({
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
      <path d="M16.5 21.9V19.5L20.1 14.9L9.5 6.6L8 7.8V2H22V21.9H16.5ZM15 10H19V8.5H15V10ZM11.5 6.5H19V5H11.5V6.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.1L17.1 16.3L15 14.7V22H4V14.8L1.9 16.4ZM8 16V19H11V16H8Z" fill={color} />
    </svg>
  );
};

MunicipalityFill.displayName = 'MunicipalityFill';
