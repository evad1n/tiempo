import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const StarIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => {
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
          d="M9.7 3.519c.862-2.03 3.739-2.03 4.601 0l1.558 3.666 3.848.322c2.178.183 3.09 2.874 1.472 4.343l-2.943 2.671.963 4.436c.487 2.241-2.05 3.9-3.908 2.556l-3.29-2.379-3.292 2.38c-1.858 1.343-4.394-.316-3.908-2.557l.964-4.436-2.943-2.671c-1.618-1.469-.706-4.16 1.471-4.343l3.849-.322L9.699 3.52Zm2.76.782a.5.5 0 0 0-.92 0L9.864 8.245a1.5 1.5 0 0 1-1.255.908L4.46 9.5a.5.5 0 0 0-.294.869l3.157 2.865a1.5 1.5 0 0 1 .457 1.43L6.756 19.38a.5.5 0 0 0 .781.512l3.584-2.591a1.5 1.5 0 0 1 1.758 0l3.584 2.59a.5.5 0 0 0 .781-.51l-1.024-4.719a1.5 1.5 0 0 1 .458-1.429l3.156-2.865a.5.5 0 0 0-.294-.869l-4.149-.347a1.5 1.5 0 0 1-1.255-.908L12.46 4.3Z"
          fill="currentColor"
        />
      </IconBase>
    );
  }
);
