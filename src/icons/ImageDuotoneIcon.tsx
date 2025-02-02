import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const ImageDuotoneIcon = forwardRef<
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
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V9.4Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#CACACE'}
        data-is-secondary-color="true"
      />
      <path
        d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 4.087c.001.972.01 1.712.07 2.309l3.332-2.06c.465-.288.52-.31.56-.32a.5.5 0 0 1 .2-.01c.039.006.097.022.589.261l.528.258.09.043c.374.184.75.368 1.159.421a2.5 2.5 0 0 0 1.06-.089c.394-.12.735-.364 1.073-.607l.081-.059 2.506-1.789c.547-.39.616-.42.662-.433a.5.5 0 0 1 .237-.005c.046.01.116.038.679.405l5.148 3.354C21 16.183 21 15.477 21 14.6v-.204l-4.082-2.66-.096-.062c-.396-.26-.793-.52-1.242-.62a2.5 2.5 0 0 0-1.186.026c-.445.119-.83.395-1.215.671l-.093.067-2.506 1.789c-.479.342-.538.37-.579.382a.5.5 0 0 1-.212.018c-.042-.006-.106-.023-.635-.28l-.528-.258-.083-.04c-.349-.171-.7-.342-1.081-.4a2.498 2.498 0 0 0-.999.05c-.373.096-.705.302-1.035.507l-.078.048L3 15.087Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
