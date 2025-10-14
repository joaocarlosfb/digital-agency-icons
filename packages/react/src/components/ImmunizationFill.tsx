import React from 'react';

export interface ImmunizationFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ImmunizationFill: React.FC<ImmunizationFillProps> = ({
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
      <path d="M18.6 6.5L19.9 7.8L21.3 6.4L17.6 2.7L16.2 4.1L17.5 5.4L16.2 6.7L11.9 2.5L10.9 3.6L12.2 4.9L10.1 7L13.9 10.7L13 11.7L9.2 7.9L7.1 10.1L10.8 13.8L9.9 14.7L6.2 11L3 14.1L5.9 17L2.5 20.4L3.6 21.5L7 18.1L9.9 21L19.1 11.8L20.4 13.1L21.5 12.1L17.2 7.8L18.6 6.5Z" fill={color} />
    </svg>
  );
};

ImmunizationFill.displayName = 'ImmunizationFill';
