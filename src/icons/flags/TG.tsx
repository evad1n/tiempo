import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="scale(.9375)"
      >
        <path fill="#ffe300" d="M0 0h767.6v512H0z" />
        <path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z" />
        <path fill="#d80000" d="M0 .3h306.5v310.6H0z" />
        <path
          fill="#fff"
          d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8-45.3 34.3-45.3 34.3 21.4 60 20.5 58.2c-.8-1.7-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4 55.6-.9z"
        />
        <path fill="#118600" d="M0 409.2h767.6V512H0z" />
      </g>
    </FlagIconBase>
  );
});
