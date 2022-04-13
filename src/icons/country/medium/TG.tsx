import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TG = () => {
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
          d="M0 -0.625H-0.625V0V15V15.625H0H20H20.625V15V0V-0.625H20H0Z"
          fill="#5EAA22"
          stroke="#F7FCFF"
          strokeWidth="1.25"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.75V6.25H20V3.75H0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8.75V11.25H20V8.75H0Z"
          fill="#FECA00"
        />
        <rect width="10" height="8.75" fill="#F50101" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.15625 6.34003L2.83167 7.77844L3.73414 5.36371L1.875 3.7369H4.15486L5.15625 1.33105L5.92044 3.7369H8.17287L6.5909 5.36371L7.36943 7.65998L5.15625 6.34003Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
