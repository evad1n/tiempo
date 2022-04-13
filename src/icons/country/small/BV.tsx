import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BV = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#E31D1C"
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
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M5 -0.5H4.5V0V4.5H0H-0.5V5V7V7.5H0H4.5V12V12.5H5H7H7.5V12V7.5H16H16.5V7V5V4.5H16H7.5V0V-0.5H7H5Z"
            fill="#2E42A5"
            stroke="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
