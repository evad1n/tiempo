import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const TT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path
        fill="#e00000"
        fillRule="evenodd"
        d="M463.7 480 0 1v478.8l463.7.2zM176.3 0 640 479V.2L176.3 0z"
      />
      <path fillRule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2L27.7.2z" />
    </FlagIconBase>
  );
});
