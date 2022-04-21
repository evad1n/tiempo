import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const BY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
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
          d="M0 0h16v12H0V0z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v8h16V0H0z"
          fill="#AF0100"
        />
        <path fill="#F7FCFF" d="M0 0h3v12H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.5 0a.5.5 0 110 1 .5.5 0 010-1zm2 0a.5.5 0 110 1 .5.5 0 010-1zM1 2.5a.5.5 0 10-1 0 .5.5 0 001 0zM2.5 2a.5.5 0 110 1 .5.5 0 010-1zm0 7a.5.5 0 110 1 .5.5 0 010-1zM1 9.5a.5.5 0 10-1 0 .5.5 0 001 0zM.5 11a.5.5 0 110 1 .5.5 0 010-1zm2.5.5a.5.5 0 10-1 0 .5.5 0 001 0zM1.5 10a.5.5 0 110 1 .5.5 0 010-1zM2 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm.055 4.52L3 7v1l.022.046L1.546 6.57.219 8H0V7l.991-.986-.99-.992V4h.108l1.423 1.476 1.43-1.422L3 4v1l-.945 1.02zM1.5 3a.5.5 0 110 1 .5.5 0 010-1zM2 8.5a.5.5 0 10-1 0 .5.5 0 001 0z"
          fill="#D0181A"
        />
        <path
          opacity=".4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h1v1H0V0zm1 2H0v1h1V2zM0 4h1v1H0V4zm1 3H0v1h1V7zM0 9h1v1H0V9zm1 2H0v1h1v-1zm2 0H2v1h1v-1zM3 0H2v1h1V0z"
          fill="#8F181A"
        />
      </g>
    </CountryIconBase>
  );
});
