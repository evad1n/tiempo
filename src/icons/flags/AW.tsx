import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AW = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0Z"
          fill="#5BA3DA"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} fillRule="evenodd" clipRule="evenodd">
          <path
            d="M2.78 4.29.242 3.536l2.595-.74.633-2.36.731 2.433 2.4.642-2.407.723-.718 2.324L2.78 4.29Z"
            fill="#EF2929"
          />
          <path
            d="M2.78 4.29.242 3.536l2.595-.74.633-2.36.731 2.433 2.4.642-2.407.723-.718 2.324L2.78 4.29Z"
            fill="red"
          />
          <path d="M16 7H0v1h16V7Zm0 2H0v1h16V9Z" fill="#FAD615" />
        </g>
      </g>
    </FlagIconBase>
  );
});
