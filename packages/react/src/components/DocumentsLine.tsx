import React from 'react';

export interface DocumentsLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const DocumentsLine: React.FC<DocumentsLineProps> = ({
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
      <path d="M11.6 6L9.6 4H2V21H22V6H11.6ZM9 5.5L11 7.5H20.5V10.5H3.5V5.5H9ZM3.5 19.5V12H20.5V19.5H3.5Z" fill={color} />
    </svg>
  );
};

DocumentsLine.displayName = 'DocumentsLine';
