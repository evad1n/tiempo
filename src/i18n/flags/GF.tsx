import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const GF = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#078930" d="M0 0h640v480z" />
      <path fill="#fcdd09" d="M0 0l640 480H0z" />
      <path
        fill="#da121a"
        d="M252.4 218h135.2l-109.4 79.5L320 169l41.8 128.6z"
      />
    </CountryIconBase>
  );
});
