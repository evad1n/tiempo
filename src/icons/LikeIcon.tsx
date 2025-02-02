import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LikeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
    return (
      <IconBase
        ref={ref}
        size={size}
        color={color}
        className={className}
        viewBox="0 0 24 24"
      >
        <path d="M4 10a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0v-9Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.041 10.307V18h7.95l.967-7.636h-2.566c-1.69 0-3.062-1.344-3.062-3V6h-.62L9.497 8.913a1.983 1.983 0 0 0-.344.713l-.05.2a1.95 1.95 0 0 0-.06.481Zm1.339-5.904c.192-.254.496-.403.818-.403h2.153c.564 0 1.02.448 1.02 1v2.364c0 .552.457 1 1.021 1h2.566c1.228 0 2.177 1.053 2.026 2.246l-.967 7.636C18.89 19.248 18.02 20 16.99 20H9.04C7.914 20 7 19.105 7 18v-7.693c0-.325.04-.648.12-.964l.05-.199c.131-.515.365-1 .689-1.425l2.52-3.316Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
