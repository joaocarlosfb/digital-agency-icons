import React from 'react';

export interface WorkLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const WorkLine: React.FC<WorkLineProps> = ({
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
      <path d="M17 6.5V3.5H7V6.5H2V20.5H22V6.5H17ZM8.5 5H15.5V6.5H8.5V5ZM20.5 19H3.5V12.6C5.4 13.5 7.4 14.1 9.5 14.3V16.5H14.5V14.3C16.6 14 18.6 13.5 20.5 12.6V19ZM13 15H11V13H13V15ZM20.5 10.9C18.6 11.9 16.6 12.5 14.5 12.8V11.5H9.5V12.8C7.4 12.5 5.4 11.9 3.5 10.9V8H20.5V10.9Z" fill={color} />
    </svg>
  );
};

WorkLine.displayName = 'WorkLine';
