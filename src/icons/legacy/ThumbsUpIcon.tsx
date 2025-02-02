import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

/** @deprecated Use LikeIcon instead */
export const ThumbsUpIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44772 6 10V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.04135 10.3073V18H16.9908L17.9584 10.3636H15.3922C13.7011 10.3636 12.3302 9.02049 12.3302 7.36364V6H11.7107L9.49605 8.91331C9.33423 9.12617 9.21728 9.36846 9.152 9.62605L9.10149 9.82539C9.06155 9.98303 9.04135 10.1449 9.04135 10.3073ZM10.3797 4.40268C10.5723 4.1493 10.8758 4 11.1982 4H13.3509C13.9146 4 14.3715 4.44772 14.3715 5V7.36364C14.3715 7.91592 14.8285 8.36364 15.3922 8.36364H17.9584C19.1855 8.36364 20.1353 9.41686 19.9842 10.61L19.0166 18.2464C18.8897 19.248 18.021 20 16.9908 20H9.04135C7.91395 20 7 19.1046 7 18V10.3073C7 9.98243 7.04039 9.65878 7.12029 9.34349L7.1708 9.14415C7.30134 8.62896 7.53525 8.14438 7.85888 7.71866L10.3797 4.40268Z"
      fill="currentColor"
    />
  </IconBase>
);
