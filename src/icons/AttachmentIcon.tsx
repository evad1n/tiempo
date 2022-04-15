import React from 'react';

import { IconProps } from '../types';
import { IconBase } from './IconBase';

/** @deprecated Use FileIcon instead */
export const AttachmentIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6911 2.11052C14.2284 1.99944 13.7487 1.99967 13.1137 1.99997L9.7587 2C8.95373 1.99999 8.28937 1.99998 7.74818 2.0442C7.18608 2.09012 6.66937 2.18869 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43598 4.18404C4.18868 4.66938 4.09012 5.18608 4.04419 5.74818C3.99998 6.28937 3.99999 6.95372 4 7.75869V16.2413C3.99999 17.0463 3.99998 17.7106 4.04419 18.2518C4.09012 18.8139 4.18868 19.3306 4.43598 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66937 21.8113 7.18608 21.9099 7.74818 21.9558C8.28937 22 8.95372 22 9.75868 22H14.2413C15.0463 22 15.7106 22 16.2518 21.9558C16.8139 21.9099 17.3306 21.8113 17.816 21.564C18.5686 21.1805 19.1805 20.5686 19.564 19.816C19.8113 19.3306 19.9099 18.8139 19.9558 18.2518C20 17.7106 20 17.0463 20 16.2413L20 8.88634C20.0003 8.25136 20.0006 7.77155 19.8895 7.30886C19.7915 6.90072 19.6299 6.51054 19.4106 6.15265C19.1619 5.74693 18.8225 5.40783 18.3733 4.95903L17.041 3.62672C16.5922 3.17749 16.2531 2.83807 15.8474 2.58944C15.4895 2.37013 15.0993 2.20851 14.6911 2.11052ZM13 4H9.8C8.94342 4 8.36113 4.00078 7.91104 4.03755C7.47262 4.07337 7.24842 4.1383 7.09202 4.21799C6.7157 4.40974 6.40973 4.7157 6.21799 5.09202C6.1383 5.24842 6.07337 5.47262 6.03755 5.91104C6.00078 6.36113 6 6.94342 6 7.8V16.2C6 17.0566 6.00078 17.6389 6.03755 18.089C6.07337 18.5274 6.1383 18.7516 6.21799 18.908C6.40973 19.2843 6.7157 19.5903 7.09202 19.782C7.24842 19.8617 7.47262 19.9266 7.91104 19.9625C8.36113 19.9992 8.94342 20 9.8 20H14.2C15.0566 20 15.6389 19.9992 16.089 19.9625C16.5274 19.9266 16.7516 19.8617 16.908 19.782C17.2843 19.5903 17.5903 19.2843 17.782 18.908C17.8617 18.7516 17.9266 18.5274 17.9624 18.089C17.9992 17.6389 18 17.0566 18 16.2V9H16C14.3431 9 13 7.65685 13 6V4ZM17.56 7C17.4398 6.85789 17.2479 6.6621 16.887 6.30122L15.6988 5.113C15.3379 4.75212 15.1421 4.5602 15 4.44003V6C15 6.55228 15.4477 7 16 7H17.56Z"
      fill="currentColor"
    />
  </IconBase>
);
AttachmentIcon.deprecated = true;
