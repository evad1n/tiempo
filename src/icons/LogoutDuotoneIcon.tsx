import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const LogoutDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10 7.161v9.678c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.357.031h2.676c.528 0 .982 0 1.357-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V7.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 16.839 3H14.16c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167-.03.375-.03.83-.03 1.356Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        d="M7.707 14.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L6.414 11H15a1 1 0 1 1 0 2H6.414l1.293 1.293Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
