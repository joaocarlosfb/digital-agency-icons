import React from 'react';

export interface AuthenticationFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const AuthenticationFill: React.FC<AuthenticationFillProps> = ({
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
      <path d="M12 2L3 4.9V10.6C3 15.4 6.3 19.7 11.7 21.8L12 22L12.3 21.9C17.7 19.8 21 15.5 21 10.7V4.9L12 2ZM11 15.5L7 11.5L8.1 10.4L11.1 13.4L16 8.5L17 9.6L11 15.5Z" fill={color} />
    </svg>
  );
};

AuthenticationFill.displayName = 'AuthenticationFill';
