import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FilterIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.992 5H6.002a1 1 0 0 0-.763 1.646l3.813 4.502A4 4 0 0 1 10 13.733v4.265a1 1 0 0 0 1.418.908l2-.92a1 1 0 0 0 .582-.908v-3.345a4 4 0 0 1 .946-2.584l3.81-4.503A1 1 0 0 0 17.992 5ZM6.002 3h11.99c2.554 0 3.94 2.988 2.29 4.938l-3.809 4.503A2 2 0 0 0 16 13.732v3.346a3 3 0 0 1-1.746 2.725l-2 .92C10.266 21.638 8 20.186 8 17.998v-4.265a2 2 0 0 0-.474-1.293l-3.813-4.5C2.062 5.989 3.448 3 6.003 3Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
