import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const BF = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#de0000" d="M640 479.6H.4V0H640z" />
        <path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
        <path
          fill="#fff300"
          d="m254.6 276.2-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"
        />
      </g>
    </FlagIconBase>
  );
});
