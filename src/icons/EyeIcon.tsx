import React from 'react';

import { type IconProps } from 'src/types/IconProps';

import { IconBase } from './IconBase';

export const EyeIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0002 6C7.14499 6 4.89006 9.77258 4.09708 11.5534C3.96927 11.8405 3.96927 12.1595 4.09708 12.4466C4.89006 14.2274 7.14499 18 12.0002 18C16.8555 18 19.1103 14.2273 19.9031 12.4465C20.0309 12.1595 20.0309 11.8405 19.9031 11.5535C19.1103 9.77274 16.8555 6 12.0002 6ZM2.27002 10.7399C3.13935 8.78756 5.89147 4 12.0002 4C18.1091 4 20.861 8.78782 21.7302 10.7401C22.0885 11.5448 22.0885 12.4552 21.7302 13.2599C20.861 15.2122 18.1091 20 12.0002 20C5.89147 20 3.13935 15.2124 2.27002 13.2601C1.91162 12.4552 1.91162 11.5448 2.27002 10.7399Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8C9.79091 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.79091 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8ZM11.9153 10.0018C11.9434 10.0006 11.9717 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12C10 11.9716 10.0006 11.9434 10.0018 11.9153C10.1577 11.9701 10.3254 12 10.5 12C11.3285 12 12 11.3284 12 10.5C12 10.3253 11.9702 10.1577 11.9153 10.0018Z"
      fill="currentColor"
    />
  </IconBase>
);

export const EyeSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.27002 10.7399C3.13935 8.78756 5.89147 4 12.0002 4C18.1091 4 20.861 8.78782 21.7302 10.7401C22.0885 11.5448 22.0885 12.4552 21.7302 13.2599C20.861 15.2122 18.1091 20 12.0002 20C5.89147 20 3.13935 15.2124 2.27002 13.2601C1.91162 12.4552 1.91162 11.5448 2.27002 10.7399ZM11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.2091 8 11.9999 8C9.7908 8 7.99994 9.79086 7.99994 12C7.99994 14.2091 9.7908 16 11.9999 16Z"
      fill="currentColor"
    />
    <path
      d="M10.4999 12C11.3284 12 11.9999 11.3284 11.9999 10.5C11.9999 10.3253 11.9701 10.1577 11.9152 10.0018C11.9433 10.0006 11.9716 10 11.9999 10C13.1045 10 13.9999 10.8954 13.9999 12C13.9999 13.1046 13.1045 14 11.9999 14C10.8954 14 9.99994 13.1046 9.99994 12C9.99994 11.9716 10.0005 11.9434 10.0017 11.9153C10.1576 11.9701 10.3253 12 10.4999 12Z"
      fill="currentColor"
    />
  </IconBase>
);

export const EyeDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M12.0002 4C5.89147 4 3.13935 8.78756 2.27002 10.7399C1.91162 11.5448 1.91162 12.4552 2.27002 13.2601C3.13935 15.2124 5.89147 20 12.0002 20C18.1091 20 20.861 15.2122 21.7302 13.2599C22.0885 12.4552 22.0885 11.5448 21.7302 10.7401C20.861 8.78782 18.1091 4 12.0002 4Z"
      fill="currentColor"
    />
    <path
      d="M10 12C11.1046 12 12 11.1046 12 10C12 9.64033 11.9051 9.30283 11.7389 9.01121C11.8249 9.00379 11.912 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 11.912 9.00379 11.8249 9.01121 11.7389C9.30283 11.9051 9.64033 12 10 12Z"
      fill="#3D3D40"
    />
  </IconBase>
);
