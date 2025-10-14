import React from 'react';

export interface CodeReaderFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const CodeReaderFill: React.FC<CodeReaderFillProps> = ({
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
      <path d="M3 21V3H21V21H3ZM6 18H11V13H6V18ZM6 11H11V6H6V11ZM18 6H13V11H18V6ZM13 18H18V13H13V18ZM14.1992 7.2002H16.6992V9.7002H14.1992V7.2002ZM7.19922 14.2002H9.69922V16.7002H7.19922V14.2002ZM9.69922 7.2002H7.19922V9.7002H9.69922V7.2002Z" fill={color} />
    </svg>
  );
};

CodeReaderFill.displayName = 'CodeReaderFill';
