import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const SY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <rect
        width="640"
        height="160"
        y="160"
        fill="#fff"
        fillRule="evenodd"
        rx="0"
        ry="0"
      />
      <rect width="640" height="160" y="320" fillRule="evenodd" rx="0" ry="0" />
      <path fill="red" fillRule="evenodd" d="M0 0h640v160H0z" />
      <path
        fill="#090"
        fillRule="evenodd"
        d="m201.9 281-28.8-20.9-28.7 21.1 10.7-34.2-28.7-21.2 35.4-.3 11-34.1 11.3 34h35.4L191 246.9l10.9 34.2zm307.6 0-28.8-20.9-28.7 21.1 10.7-34.2-28.6-21.2 35.4-.3 11-34.1 11.2 34h35.4l-28.5 21.4 11 34.2z"
      />
    </FlagIconBase>
  );
});
