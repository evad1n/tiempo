import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MQ1 = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 0H20V15H14V0Z"
          fill="#F50100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H8V15H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0H14V15H6V0Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
