import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './IconBase';

export const FileUploadIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.8 4H13V6C13 7.65685 14.3431 9 16 9H18V12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12L20 8.88632C20.0003 8.25134 20.0006 7.77155 19.8895 7.30886C19.7915 6.90072 19.6299 6.51054 19.4106 6.15265C19.1619 5.74693 18.8225 5.40782 18.3733 4.95902L17.041 3.62672C16.5922 3.17749 16.2531 2.83807 15.8474 2.58944C15.4895 2.37013 15.0993 2.20851 14.6911 2.11052C14.2284 1.99944 13.7487 1.99967 13.1137 1.99997L9.7587 2C8.95373 1.99999 8.28937 1.99998 7.74818 2.0442C7.18608 2.09012 6.66938 2.18869 6.18404 2.43598C5.43139 2.81947 4.81947 3.43139 4.43598 4.18404C4.18868 4.66938 4.09012 5.18608 4.0442 5.74818C3.99998 6.28936 3.99999 6.95373 4 7.75869V16.2413C3.99999 17.0463 3.99998 17.7106 4.0442 18.2518C4.09012 18.8139 4.18868 19.3306 4.43598 19.816C4.81947 20.5686 5.43139 21.1805 6.18404 21.564C6.66938 21.8113 7.18608 21.9099 7.74818 21.9558C8.28937 22 8.95372 22 9.75868 22H14C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20H9.8C8.94342 20 8.36113 19.9992 7.91104 19.9625C7.47262 19.9266 7.24842 19.8617 7.09202 19.782C6.7157 19.5903 6.40974 19.2843 6.21799 18.908C6.1383 18.7516 6.07337 18.5274 6.03755 18.089C6.00078 17.6389 6 17.0566 6 16.2V7.8C6 6.94342 6.00078 6.36113 6.03755 5.91104C6.07337 5.47262 6.1383 5.24842 6.21799 5.09202C6.40974 4.7157 6.7157 4.40974 7.09202 4.21799C7.24842 4.1383 7.47262 4.07337 7.91104 4.03755C8.36113 4.00078 8.94342 4 9.8 4ZM16.887 6.30122C17.2479 6.6621 17.4398 6.85789 17.56 7H16C15.4477 7 15 6.55228 15 6V4.44003C15.1421 4.5602 15.3379 4.75212 15.6988 5.113L16.887 6.30122Z"
      fill="currentColor"
    />
    <path
      d="M18.2929 15.2929C18.6834 14.9024 19.3166 14.9024 19.7071 15.2929L21.7071 17.2929C22.0976 17.6834 22.0976 18.3166 21.7071 18.7071C21.3166 19.0976 20.6834 19.0976 20.2929 18.7071L20 18.4142V22C20 22.5523 19.5523 23 19 23C18.4477 23 18 22.5523 18 22V18.4142L17.7071 18.7071C17.3166 19.0976 16.6834 19.0976 16.2929 18.7071C15.9024 18.3166 15.9024 17.6834 16.2929 17.2929L18.2929 15.2929Z"
      fill="currentColor"
    />
  </IconBase>
);

export const FileUploadSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929L16.2929 17.2929C15.9024 17.6834 15.9024 18.3166 16.2929 18.7071C16.6834 19.0976 17.3166 19.0976 17.7071 18.7071L18 18.4142V22C18 22.5523 18.4477 23 19 23C19.5523 23 20 22.5523 20 22V18.4142L20.2929 18.7071C20.6834 19.0976 21.3166 19.0976 21.7071 18.7071C22.0976 18.3166 22.0976 17.6834 21.7071 17.2929L19.7071 15.2929Z"
      fill="currentColor"
    />
    <path
      d="M4 6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.2C12.48 2 12.62 2 12.727 2.0545C12.8211 2.10243 12.8976 2.17892 12.9455 2.273C13 2.37996 13 2.51997 13 2.8V5C13 7.20914 14.7909 9 17 9H19.2C19.48 9 19.62 9 19.727 9.0545C19.8211 9.10243 19.8976 9.17892 19.9455 9.273C20 9.37996 20 9.51997 20 9.8V12.2C20 12.48 20 12.62 19.9455 12.727C19.8976 12.8211 19.8211 12.8976 19.727 12.9455C19.62 13 19.48 13 19.2 13H19C15.6863 13 13 15.6863 13 19V21.2C13 21.48 13 21.62 12.9455 21.727C12.8976 21.8211 12.8211 21.8976 12.727 21.9455C12.62 22 12.48 22 12.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8Z"
      fill="currentColor"
    />
    <path
      d="M15 2.70711C15 2.31658 15.3166 2 15.7071 2C15.8946 2 16.0745 2.0745 16.2071 2.20711L19.7929 5.79289C19.9255 5.9255 20 6.10536 20 6.29289C20 6.68342 19.6834 7 19.2929 7H17C15.8954 7 15 6.10457 15 5V2.70711Z"
      fill="currentColor"
    />
  </IconBase>
);

export const FileUploadDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M4 6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H14.6745C15.1637 2 15.4083 2 15.6385 2.05526C15.8425 2.10425 16.0376 2.18506 16.2166 2.29472C16.4184 2.4184 16.5914 2.59135 16.9373 2.93726L19.0627 5.06274C19.4086 5.40865 19.5816 5.5816 19.7053 5.78343C19.8149 5.96237 19.8957 6.15746 19.9447 6.36154C20 6.59171 20 6.8363 20 7.32548V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8Z"
      fill="currentColor"
    />
    <path
      d="M19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929L16.2929 17.2929C15.9024 17.6834 15.9024 18.3166 16.2929 18.7071C16.6834 19.0976 17.3166 19.0976 17.7071 18.7071L18 18.4142V22C18 22.5523 18.4477 23 19 23C19.5523 23 20 22.5523 20 22V18.4142L20.2929 18.7071C20.6834 19.0976 21.3166 19.0976 21.7071 18.7071C22.0976 18.3166 22.0976 17.6834 21.7071 17.2929L19.7071 15.2929Z"
      fill="#3D3D40"
    />
    <path
      d="M14 3.41421C14 2.63317 14.6332 2 15.4142 2C15.7893 2 16.149 2.149 16.4142 2.41421L19.5858 5.58579C19.851 5.851 20 6.21071 20 6.58579C20 7.36683 19.3668 8 18.5858 8H16C14.8954 8 14 7.10457 14 6V3.41421Z"
      fill="#3D3D40"
    />
  </IconBase>
);
