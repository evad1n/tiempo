import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const CodeSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.465 4.423a1 1 0 0 0-1.268.626L8.703 18.31a1 1 0 0 0 1.894.641l4.494-13.259a1 1 0 0 0-.626-1.268ZM5.841 7.79a1.011 1.011 0 0 1 1.42 0 .984.984 0 0 1 0 1.404L4.422 12l2.839 2.806a.984.984 0 0 1 0 1.403 1.012 1.012 0 0 1-1.42 0l-3.547-3.507a.984.984 0 0 1 0-1.404L5.84 7.791Zm12.318 8.42a1.011 1.011 0 0 1-1.42 0 .984.984 0 0 1 0-1.404L19.578 12 16.74 9.194a.984.984 0 0 1 0-1.403 1.011 1.011 0 0 1 1.42 0l3.547 3.507a.984.984 0 0 1 0 1.404l-3.547 3.507Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
