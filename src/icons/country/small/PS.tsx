import React from 'react';

import { useStableUniqueId } from 'hooks';

export const PS = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H16V12H0V0Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V4H16V0H0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8V12H16V8H0Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1L8 6L0 11V1Z"
          fill="#E31D1C"
        />
      </g>
    </svg>
  );
};
