import React from 'react';

export interface ApplicationFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ApplicationFill: React.FC<ApplicationFillProps> = ({
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
      <path d="M4 22H20V5.2L16.7 2H4V22ZM11.3 19.8L8.4 17.2L9.3 16.2L11.3 18L14.6 14.9L15.5 15.9L11.3 19.8ZM15.9 3.3L18.9 6.3H15.9V3.3ZM7 8.2H17V9.7H7V8.2ZM7 11.7H17V13.2H7V11.7Z" fill={color} />
    </svg>
  );
};

ApplicationFill.displayName = 'ApplicationFill';
