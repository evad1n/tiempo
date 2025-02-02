import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const FI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#003580" d="M0 174.5h640v131H0z" />
      <path fill="#003580" d="M175.5 0h130.9v480h-131z" />
    </FlagIconBase>
  );
});
