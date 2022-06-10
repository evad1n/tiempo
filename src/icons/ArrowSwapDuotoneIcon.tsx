import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowSwapDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M16.5858 5.70711C16.1953 5.31658 16.1953 4.68342 16.5858 4.2929C16.9763 3.90237 17.6095 3.90237 18 4.2929L21.7071 8C22.0976 8.39053 22.0976 9.02369 21.7071 9.41422L18 13.1213C17.6095 13.5118 16.9763 13.5118 16.5858 13.1213C16.1953 12.7308 16.1953 12.0976 16.5858 11.7071L18.5858 9.70711L11 9.70711C10.4477 9.70711 10 9.25939 10 8.70711C10 8.15482 10.4477 7.70711 11 7.70711L18.5858 7.70711L16.5858 5.70711Z"
        fill="currentColor"
      />
      <path
        d="M7.41421 17.7071C7.80474 18.0976 7.80474 18.7308 7.41421 19.1213C7.02369 19.5118 6.39052 19.5118 6 19.1213L2.29289 15.4142C1.90237 15.0237 1.90237 14.3905 2.29289 14L6 10.2929C6.39052 9.90237 7.02369 9.90237 7.41421 10.2929C7.80474 10.6834 7.80474 11.3166 7.41421 11.7071L5.41421 13.7071L13 13.7071C13.5523 13.7071 14 14.1548 14 14.7071C14 15.2594 13.5523 15.7071 13 15.7071L5.41421 15.7071L7.41421 17.7071Z"
        fill={secondaryColor || '#CACACE'}
      />
    </IconBase>
  );
};
