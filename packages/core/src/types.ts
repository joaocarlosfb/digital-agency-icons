export interface IconData {
  name: string;
  variant: 'fill' | 'line';
  svg: string;
  path: string;
  viewBox: string;
  width: number;
  height: number;
}

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: Record<string, any>;
  'aria-label'?: string;
  title?: string;
}

export type IconVariant = 'fill' | 'line';
