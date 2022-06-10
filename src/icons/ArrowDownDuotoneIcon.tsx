import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowDownDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.7073 13.8787C16.0978 13.4882 16.7309 13.4882 17.1215 13.8787C17.512 14.2692 17.512 14.9024 17.1215 15.2929L12.7073 19.7071C12.3167 20.0976 11.6836 20.0976 11.293 19.7071L6.87883 15.2929C6.48831 14.9024 6.48831 14.2692 6.87883 13.8787C7.26935 13.4882 7.90252 13.4882 8.29304 13.8787L11.0002 16.5858L11.0002 5C11.0002 4.44771 11.4479 4 12.0002 4C12.5524 4 13.0002 4.44771 13.0002 5L13.0002 16.5858L15.7073 13.8787Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
