import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './_IconBase';

export const TagIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4142 4.17157C11.1643 3.42143 12.1818 3 13.2426 3H18C19.6568 3 21 4.34315 21 6V10.7574C21 11.8182 20.5786 12.8356 19.8284 13.5858L13.2913 20.1229C12.1197 21.2945 10.2202 21.2945 9.04866 20.1229L3.87709 14.9513C2.70552 13.7797 2.70552 11.8803 3.87709 10.7087L10.4142 4.17157ZM13.2426 5C12.7122 5 12.2035 5.21071 11.8284 5.58579L5.29131 12.1229C4.90078 12.5134 4.90078 13.1466 5.29131 13.5371L10.4629 18.7087C10.8534 19.0992 11.4866 19.0992 11.8771 18.7087L18.4142 12.1716C18.7893 11.7965 19 11.2878 19 10.7574V6C19 5.44772 18.5523 5 18 5H13.2426Z"
      fill="currentColor"
    />
    <path
      d="M17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5Z"
      fill="currentColor"
    />
  </IconBase>
);

export const TagSolidIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2426 3C12.1818 3 11.1643 3.42143 10.4142 4.17157L3.87709 10.7087C2.70552 11.8803 2.70552 13.7797 3.87709 14.9513L9.04866 20.1229C10.2202 21.2945 12.1197 21.2945 13.2913 20.1229L19.8284 13.5858C20.5786 12.8356 21 11.8182 21 10.7574V6C21 4.34315 19.6568 3 18 3H13.2426ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z"
      fill="currentColor"
    />
  </IconBase>
);

export const TagDuotoneIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      d="M12.8286 3C12.033 3 11.2699 3.31607 10.7073 3.87868L3.59018 10.9958C2.80913 11.7768 2.80913 13.0432 3.59018 13.8242L10.176 20.41C10.957 21.1911 12.2234 21.191 13.0044 20.41L20.1215 13.2929C20.6841 12.7303 21.0002 11.9672 21.0002 11.1716V5C21.0002 3.89543 20.1048 3 19.0002 3H12.8286Z"
      fill="currentColor"
    />
    <path
      d="M17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5Z"
      fill="#3D3D40"
    />
  </IconBase>
);
