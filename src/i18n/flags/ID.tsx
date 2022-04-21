import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const ID = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#e70011" d="M0 0h640v249H0z" />
        <path fill="#fff" d="M0 240h640v240H0z" />
      </g>
    </CountryIconBase>
  );
});
