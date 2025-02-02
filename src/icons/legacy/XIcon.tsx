import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

/** @deprecated Use RemoveIcon instead */
export const XIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.87871 6.87871C7.26923 6.48818 7.9024 6.48818 8.29292 6.87871L12 10.5858L15.7071 6.87871C16.0977 6.48818 16.7308 6.48818 17.1213 6.87871C17.5119 7.26923 17.5119 7.9024 17.1213 8.29292L13.4142 12L17.1213 15.7071C17.5119 16.0977 17.5119 16.7308 17.1213 17.1213C16.7308 17.5119 16.0977 17.5119 15.7071 17.1213L12 13.4142L8.29292 17.1213C7.9024 17.5119 7.26923 17.5119 6.87871 17.1213C6.48818 16.7308 6.48818 16.0977 6.87871 15.7071L10.5858 12L6.87871 8.29292C6.48818 7.9024 6.48818 7.26923 6.87871 6.87871Z"
      fill="currentColor"
    />
  </IconBase>
);
