import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const HK = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          fill="#EA1A1A"
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
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.935 5.787s-2.895-2.581.56-4.085c0 0 1.004 1.108.25 2.352-.247.408-.456.7-.612.919-.321.448-.425.593-.198.814ZM3.662 3.934C3.464 7.696 7.067 6.26 7.067 6.26c-.3.104-.382-.054-.64-.541-.126-.238-.293-.555-.548-.959-.776-1.23-2.217-.827-2.217-.827Zm5.457 1.98s3.716 1.112 1.224 3.938c0 0-1.38-.579-1.224-2.025.051-.474.117-.826.166-1.091.1-.543.133-.718-.166-.822Zm-.977.867s.667 3.821-2.975 2.855c0 0-.1-1.492 1.264-2 .447-.166.791-.265 1.05-.34.53-.152.701-.2.661-.515Zm4.597-1.643c-2.277-3.001-4.102.421-4.102.421.162-.272.327-.206.838 0 .25.1.582.235 1.038.378 1.387.439 2.226-.8 2.226-.8Z"
            fill="#fff"
          />
          <path
            d="M5.08 5.104S5.81 6.25 7 6.25m.93-2.725s-.653 1.205-.093 2.258m3.218-.903s-1.525-.23-2.323.656m1.432 2.136S9.86 6.16 8.754 5.714M6.967 8.493S8.284 7.69 8.325 6.5"
            stroke="#EA1A1A"
            strokeWidth=".5"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
