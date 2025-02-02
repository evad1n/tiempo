import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const StarOffSolidIcon = forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.066 8.066-4.683.383c-1.32.107-1.863 1.747-.87 2.621l3.694 3.248a.5.5 0 0 1 .158.482l-1.181 5.368c-.295 1.34 1.217 2.34 2.335 1.544l4.191-2.985a.5.5 0 0 1 .58 0l4.192 2.985c1.118.796 2.63-.204 2.335-1.544l-.381-1.732-10.37-10.37Zm11.215 2.28-3.692-.301a2.5 2.5 0 0 1-2.115-1.556L12 4.836l-.222.55a1 1 0 1 1-1.855-.748l.686-1.7c.505-1.252 2.277-1.252 2.782 0L15.33 7.74a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.862 1.747.868 2.621l-2.488 2.188a1 1 0 1 1-1.32-1.501l1.603-1.41Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
