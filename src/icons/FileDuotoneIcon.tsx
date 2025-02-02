import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const FileDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h5.874c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l2.126 2.126c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        d="M14 3.414a1.414 1.414 0 0 1 2.414-1l3.172 3.172a1.414 1.414 0 0 1-1 2.414H16a2 2 0 0 1-2-2V3.414Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
