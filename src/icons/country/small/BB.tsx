import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BB = () => {
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
          d="M11 0H16V12H11V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0H11V12H5V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H5V12H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.21718 7.63663C9.53357 6.98212 9.89857 5.78778 9.89857 5.78778L10.1755 4.96547L9.07793 5.36291L9.33767 5.51376C9.33767 5.51376 8.88499 6.41865 8.657 6.8607C8.429 7.30275 8.40643 7.01071 8.40643 7.01071L8.44544 3.92636L8.69735 3.85805L8.06955 2.6521L7.26858 3.87477L7.62151 3.88429C7.62151 3.88429 7.59217 7.13859 7.54312 7.01071C7.51574 6.93807 7.4429 7.16257 7.4074 7.07561C7.18489 6.53051 6.88057 5.47404 6.88057 5.47404L7.05864 5.30745L5.8645 5.06177L6.22101 5.7959C6.22101 5.7959 6.53539 7.1041 6.88057 7.74299C6.9583 7.94513 7.33388 8.03135 7.33388 8.03135C7.33388 8.03135 7.51725 7.84521 7.56268 8.03135C7.60811 8.21749 7.56268 8.96884 7.56268 8.96884H8.40643C8.40643 8.96884 8.34702 8.26003 8.40643 8.03135C8.46584 7.80267 8.64998 8.03135 8.64998 8.03135C8.64998 8.03135 9.13958 7.83877 9.21718 7.63663Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
