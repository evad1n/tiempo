import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const SendSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.707 18.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H16a1 1 0 1 1 0-2h3.586l-.293-.293a1 1 0 0 1 1.414-1.414l2 2ZM2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C21.62 13 21.48 13 21.2 13H19a6 6 0 0 0-6 6v.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C12.62 20 12.48 20 12.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2V8.8Zm4.175-.366a1 1 0 0 1 1.39-.259l3.87 2.654a1 1 0 0 0 1.13 0l3.87-2.654a1 1 0 0 1 1.13 1.65l-3.868 2.654a3 3 0 0 1-3.394 0L6.434 9.825a1 1 0 0 1-.259-1.39Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
