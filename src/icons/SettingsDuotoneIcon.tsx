import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const SettingsDuotoneIcon = forwardRef<
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.5A1.5 1.5 0 0 1 11.5 2h1A1.5 1.5 0 0 1 14 3.5v.364c0 .229.155.426.373.494a7.95 7.95 0 0 1 1.353.56.522.522 0 0 0 .612-.085l.258-.258a1.5 1.5 0 0 1 2.122 0l.707.707a1.5 1.5 0 0 1 0 2.122l-.259.258a.522.522 0 0 0-.085.612c.227.43.415.882.561 1.353a.522.522 0 0 0 .494.373h.364a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.364a.522.522 0 0 0-.494.373 7.953 7.953 0 0 1-.56 1.353.522.522 0 0 0 .084.612l.259.258a1.5 1.5 0 0 1 0 2.122l-.707.707a1.5 1.5 0 0 1-2.122 0l-.258-.259a.522.522 0 0 0-.613-.085 7.873 7.873 0 0 1-1.352.561.522.522 0 0 0-.373.494v.364a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-.364a.522.522 0 0 0-.373-.494 7.945 7.945 0 0 1-1.353-.56.522.522 0 0 0-.612.084l-.258.259a1.5 1.5 0 0 1-2.122 0l-.707-.707a1.5 1.5 0 0 1 0-2.122l.258-.258a.522.522 0 0 0 .086-.613 7.95 7.95 0 0 1-.561-1.352.522.522 0 0 0-.494-.373H3.5A1.5 1.5 0 0 1 2 12.5v-1A1.5 1.5 0 0 1 3.5 10h.364a.522.522 0 0 0 .494-.373 7.95 7.95 0 0 1 .56-1.353.522.522 0 0 0-.085-.612l-.258-.258a1.5 1.5 0 0 1 0-2.122l.707-.707a1.5 1.5 0 0 1 2.122 0l.258.258a.52.52 0 0 0 .612.086 7.95 7.95 0 0 1 1.353-.561.522.522 0 0 0 .373-.494V3.5Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" />
    </IconBase>
  );
});
