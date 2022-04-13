import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SO = () => {
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
          fill="#56C6F5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.98936 7.35869L6.10739 8.55525L6.73864 6.46058L5.3963 5.09203L7.24695 5.05161L8.06572 2.98368L8.81183 5.07892L10.6581 5.11115L9.27066 6.50478L9.91853 8.49749L7.98936 7.35869Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
