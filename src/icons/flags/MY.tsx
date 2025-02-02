import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#cc0001" d="M0 0h640v480H0z" />
      <path id={`${ids[0]}`} fill="#fff" d="M0 445.8h640V480H0z" />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -68.6)"
        xlinkHref="#a"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -137.2)"
        xlinkHref="#a"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -205.8)"
        xlinkHref="#a"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -274.3)"
        xlinkHref="#a"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -343)"
        xlinkHref="#a"
      />
      <use
        width="100%"
        height="100%"
        transform="translate(0 -411.5)"
        xlinkHref="#a"
      />
      <path fill="#010066" d="M0 0h372.6v274.3H0z" />
      <g fill="#fc0">
        <path d="M149.7 48.5c-49 0-88.9 39.7-88.9 88.6a88.8 88.8 0 0 0 89 88.6 88.7 88.7 0 0 0 48-14 78.9 78.9 0 0 1-25.8 4.2 78.7 78.7 0 0 1-78.8-78.5 78.7 78.7 0 0 1 106.2-73.7 88.7 88.7 0 0 0-49.7-15.2z" />
        <path d="m297.1 183.2-37.4-19.5 11 40-25-33.5-7.8 40.7-7.7-40.7-25.1 33.4 11.2-40-37.6 19.5 28-31.3-42.5 1.6 39-16.3-39-16.5 42.5 1.7L178.9 91l37.4 19.5-11-40 25 33.5 7.8-40.7 7.7 40.7 25.1-33.3-11.2 39.9 37.6-19.4-28 31.2 42.5-1.6-39 16.4 39 16.5-42.5-1.8z" />
      </g>
    </FlagIconBase>
  );
});
