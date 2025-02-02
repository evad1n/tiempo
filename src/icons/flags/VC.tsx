import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const VC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#f4f100" d="M0 0h640v480H0z" />
        <path fill="#199a00" d="M490 0h150v480H490z" />
        <path fill="#0058aa" d="M0 0h150v480H0z" />
        <path
          fill="#199a00"
          d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72z"
        />
      </g>
    </FlagIconBase>
  );
});
