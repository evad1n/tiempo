import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FilterSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.994 3H5.006c-1.69 0-2.618 1.966-1.544 3.27l5.31 6.453A1 1 0 0 1 9 13.36v5.634c0 1.538 1.664 2.5 2.997 1.734l2-1.15A2 2 0 0 0 15 17.843v-4.484a1 1 0 0 1 .228-.636l5.31-6.452C21.612 4.966 20.684 3 18.994 3Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
