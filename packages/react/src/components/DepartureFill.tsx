import React from 'react';

export interface DepartureFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const DepartureFill: React.FC<DepartureFillProps> = ({
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
      <path d="M18.8 4.5999C19.7 4.4999 20.5 4.5999 21.3 4.7999C22.4 5.0999 22.2 5.8999 22.2 5.7999C22.1063 6.45607 21.3096 6.84863 20.8807 7.05995C20.8521 7.07407 20.825 7.08738 20.8 7.0999L7.6 13.1999C7 13.4999 6.3 13.5999 5.7 13.5999C4.8 13.5999 4 13.3999 3.5 12.7999L1.5 10.7999L3.4 9.9999L5.5 10.9999L8.6 9.3999L5 4.8999L7.4 3.8999L12.8 7.2999C13.9 6.69992 16.0999 5.59995 16.5 5.39992L16.5 5.3999C17.5 4.8999 17.9 4.6999 18.8 4.5999ZM1.69922 19.2002H15.1992V21.2002H1.69922V19.2002Z" fill={color} />
    </svg>
  );
};

DepartureFill.displayName = 'DepartureFill';
