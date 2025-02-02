import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const PlayCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          fill="currentColor"
        />
        <path
          d="M9 9.003a1 1 0 0 1 1.513-.858l4.997 2.988a1.01 1.01 0 0 1 0 1.734l-4.997 2.988A1 1 0 0 1 9 14.997V9.003Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
