import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AF = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
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
      <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
        <path d="M11 0h5v12h-5V0Z" fill="#67BD38" />
        <path d="M5 0h6v12H5V0Z" fill="#D51700" />
        <path d="M0 0h5v12H0V0Z" fill="#272727" />
        <path
          d="M5 6.05a3.05 3.05 0 1 0 5.48-1.844l-.443 1.338A2.055 2.055 0 0 1 9.3 7.675V5.3H9a1 1 0 0 0-2 0h-.3v2.293a2.045 2.045 0 0 1-.662-1.937H6l-.37-1.462A3.037 3.037 0 0 0 5 6.05Zm2.7.204V8.07a2.063 2.063 0 0 0 .6.015v-1.83a1 1 0 0 1-.6 0Z"
          fill="#F7FCFF"
        />
      </g>
    </FlagIconBase>
  );
});
