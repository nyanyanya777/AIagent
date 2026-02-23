declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  type IconProps = SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string };
  type Icon = FC<IconProps>;
  export const ChevronDown: Icon;
  export const ChevronRight: Icon;
  export const MoreHorizontal: Icon;
  export const Check: Icon;
  export const X: Icon;
  export const Circle: Icon;
}
