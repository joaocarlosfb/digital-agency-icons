import React from 'react';

export interface ItineraryFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const ItineraryFill: React.FC<ItineraryFillProps> = ({
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
      <path d="M15.2017 21.7002C15.3017 21.0002 15.0017 20.3002 14.4017 19.9002L13.2017 19.1002C13.4017 17.0002 13.6017 14.8002 13.7017 13.3002L22.3017 16.2002C22.3017 15.0002 22.4017 13.5002 21.6017 13.0002C20.4017 12.3002 13.9017 8.4002 13.9017 8.4002C14.2017 4.2002 13.1017 2.2002 12.1017 2.2002C11.0017 2.2002 10.0017 4.2002 10.3017 8.4002C10.3017 8.4002 3.80175 12.3002 2.60175 13.0002C1.70175 13.5002 1.90175 15.0002 1.90175 16.2002L10.5017 13.3002C10.6017 14.8002 10.8017 17.0002 11.0017 19.1002L9.60175 20.0002C9.00175 20.3002 8.70175 21.0002 8.80175 21.7002H15.2017Z" fill={color} />
    </svg>
  );
};

ItineraryFill.displayName = 'ItineraryFill';
