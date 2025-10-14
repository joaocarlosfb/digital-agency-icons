import React from 'react';

export interface DownloadLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const DownloadLine: React.FC<DownloadLineProps> = ({
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
      <path d="M18 9L19 10L12 17.1L5 10L6 9L11.2 14.2V3H12.7V14.2L18 9ZM3 21V19.5H21V21H3Z" fill={color} />
    </svg>
  );
};

DownloadLine.displayName = 'DownloadLine';
