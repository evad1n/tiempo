import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const WarningIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7824 16.1068L13.7896 6.10358C13.053 4.62782 10.9472 4.6278 10.2106 6.10357L5.21763 16.1068C4.55392 17.4365 5.52095 19 7.0071 19H16.9929C18.479 19 19.4461 17.4366 18.7824 16.1068ZM15.579 5.21041C14.1059 2.25888 9.89432 2.25886 8.42112 5.21038L3.42816 15.2136C2.10074 17.8731 4.03478 21 7.0071 21H16.9929C19.9652 21 21.8992 17.8731 20.5719 15.2137L15.579 5.21041Z"
      fill="currentColor"
    />
    <path
      d="M13 8C13 7.44771 12.5522 7 12 7C11.4477 7 11 7.44771 11 8V12C11 12.5523 11.4477 13 12 13C12.5522 13 13 12.5523 13 12V8Z"
      fill="currentColor"
    />
    <path
      d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5522 17 13 16.5523 13 16C13 15.4477 12.5522 15 12 15Z"
      fill="currentColor"
    />
  </IconBase>
);

export const WarningSolidIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6837 4.65959C13.5783 2.44779 10.422 2.44778 9.31662 4.65956L3.31962 16.6588C2.32272 18.6535 3.77322 21 6.00314 21H17.997C20.2269 21 21.6774 18.6535 20.6805 16.6589L14.6837 4.65959ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z"
      fill="currentColor"
    />
  </IconBase>
);

export const WarningDuotoneIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M9.31662 4.65952C10.422 2.44773 13.5783 2.44774 14.6837 4.65954L20.6805 16.6588C21.6774 18.6535 20.2269 21 17.997 21H6.00314C3.77322 21 2.32272 18.6535 3.31962 16.6588L9.31662 4.65952Z"
      fill="currentColor"
    />
    <path
      d="M12 8C11.4477 8 11 8.44772 11 9V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V9C13 8.44772 12.5523 8 12 8Z"
      fill="#3D3D40"
    />
    <path
      d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z"
      fill="#3D3D40"
    />
  </IconBase>
);
