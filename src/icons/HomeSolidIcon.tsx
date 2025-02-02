import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const HomeSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.41 3.396a2.705 2.705 0 0 0-2.82 0L4.33 7.208A2.788 2.788 0 0 0 3 9.59v8.63C3 19.756 4.226 21 5.74 21H8a1 1 0 0 0 1-1v-4a3 3 0 1 1 6 0v4a1 1 0 0 0 1 1h2.26c1.514 0 2.74-1.244 2.74-2.78V9.59c0-.975-.505-1.88-1.33-2.382l-6.26-3.812Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
