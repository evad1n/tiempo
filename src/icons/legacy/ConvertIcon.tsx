import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

/** @deprecated Use ArrowSwapIcon instead */
export const ConvertIcon = ({ size, color, className }: IconProps) => (
  <IconBase size={size} color={color} className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7785 7.74908c-.2929.29289-.2929.76777 0 1.06066s.7678.29289 1.0607 0l2.7647-2.7647c.1406-.14066.2196-.33142.2196-.53033 0-.19892-.079-.38968-.2196-.53033l-2.7647-2.76471c-.2929-.29289-.7678-.29289-1.0607 0-.2929.29289-.2929.76777 0 1.06066l1.4844 1.48438-5.10114-.00001c-.41421 0-.75.33579-.75.75 0 .41422.33579.75.75.75l5.10114.00001-1.4844 1.48437zm-7.23346-.32169c.29289-.2929.29289-.76777 0-1.06066-.2929-.29289-.76777-.29289-1.06066 0L.71967 9.13143C.579018 9.27209.5 9.46285.5 9.66176c0 .19892.079018.38964.21967.53034l2.76471 2.7647c.29289.2929.76776.2929 1.06066 0 .29289-.2929.29289-.7678 0-1.0607l-1.48438-1.4843h5.1011c.41422 0 .75-.3358.75-.75004 0-.41421-.33578-.75-.75-.75h-5.1011l1.48438-1.48437z"
      fill="currentColor"
    />
  </IconBase>
);
ConvertIcon.deprecated = true;
