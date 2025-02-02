import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const StarOffIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.26 7.259-2.967.248c-2.177.183-3.09 2.874-1.471 4.343l2.943 2.671-.964 4.436c-.486 2.241 2.05 3.9 3.908 2.556L12 19.134l3.291 2.38c1.778 1.285 4.176-.177 3.955-2.268l-2.594-2.594.592 2.73a.5.5 0 0 1-.781.51l-3.584-2.59a1.5 1.5 0 0 0-1.758 0l-3.584 2.59a.5.5 0 0 1-.781-.51l1.024-4.719a1.5 1.5 0 0 0-.457-1.429L4.166 10.37a.5.5 0 0 1 .294-.87l4.149-.347c.153-.013.301-.049.44-.105L7.258 7.26Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.7 3.519c.862-2.03 3.739-2.03 4.601 0l1.558 3.666 3.848.322c2.177.183 3.09 2.874 1.471 4.343l-1.704 1.547a1 1 0 0 1-1.344-1.481l1.704-1.547a.5.5 0 0 0-.294-.869l-4.149-.347a1.5 1.5 0 0 1-1.255-.908L12.46 4.3a.5.5 0 0 0-.92 0l-.206.486a1 1 0 0 1-1.841-.782l.206-.486ZM2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
