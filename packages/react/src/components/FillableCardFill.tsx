import React from 'react';

export interface FillableCardFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const FillableCardFill: React.FC<FillableCardFillProps> = ({
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
      <path d="M22 8.2V4.5H1.5V16.5H13.7L22 8.2ZM10 9.2L6.5 12.7L4 10.3L5 9.4L6.5 10.9L9 8.3L10 9.2ZM15.5 12.9H12V11.6H15.5V12.9ZM18 9.4H12V8.1H18V9.4ZM19.6 12L12.5 19.1V20.5H13.9L21 13.4L19.6 12ZM23.1008 11.2999L21.7008 12.6999L20.3008 11.2999L21.7008 9.8999L23.1008 11.2999Z" fill={color} />
    </svg>
  );
};

FillableCardFill.displayName = 'FillableCardFill';
