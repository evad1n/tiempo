import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          fill="#F7FCFF"
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
          <path d="M0 0v4h16V0H0Zm0 8v4h16V8H0Z" fill="#58A5FF" />
          <path
            d="M8.276 7.244s-.51 1.059-.96 1.276c.194-.486.266-1.477.266-1.477s-1.166.462-1.576.378c.492-.344 1.175-.98 1.175-.98s-1.509-.494-1.472-.704c.682.122 1.618-.011 1.618-.011s-1.058-1.27-.95-1.364c.16.157 1.43.82 1.43.82s.091-1.13.364-1.511c.033.269.416 1.486.416 1.486s.77-.771 1.198-.771c-.187.233-.632 1.256-.632 1.256s1.108-.018 1.53.19c-.51.072-1.405.521-1.405.521s1.165.884 1.058 1.068a5.167 5.167 0 0 0-1.348-.408s.2 1.23.038 1.507c-.157-.41-.75-1.276-.75-1.276Z"
            fill="#FFD018"
            stroke="#F19900"
            strokeOpacity=".98"
            strokeWidth=".25"
          />
          <path
            d="M8.21 6.67a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill="#FFD018"
            stroke="#F19900"
            strokeOpacity=".98"
            strokeWidth=".25"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
