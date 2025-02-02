import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const RefreshDuotoneIcon = forwardRef<
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
        d="M20.98 12.784c.552.048 1.043-.36 1.036-.914A10 10 0 0 0 5.43 4.476v-.724a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-.403a7.995 7.995 0 0 1 12.98 5.943c.02.553.422 1.04.973 1.089ZM3.016 11.221c-.552-.048-1.043.36-1.035.914a10 10 0 0 0 16.5 7.465v.627a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h.517A7.995 7.995 0 0 1 3.99 12.31c-.021-.553-.423-1.04-.974-1.088Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        d="M20.98 12.784c.552.048 1.043-.36 1.036-.914A10 10 0 0 0 5.43 4.476v-.724a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-.403a7.995 7.995 0 0 1 12.98 5.943c.02.553.422 1.04.973 1.089Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
