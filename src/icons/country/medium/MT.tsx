import React from 'react';

import { useStableUniqueId } from 'hooks';

export const MT = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="15" fill="#F7FCFF" />
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
        <mask id={`${ids[1]}`} fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 3.80005H3.75V5.67038C3.47464 5.7357 3.2698 5.98319 3.2698 6.27852C3.2698 6.28573 3.26992 6.2929 3.27016 6.30005H1.25V8.80005H3.33171C3.41244 8.96716 3.56537 9.09285 3.75 9.13665V11.3H6.25V9.14469C6.45225 9.11041 6.62144 8.97896 6.70788 8.80005H8.75V6.30005H6.76942C6.76966 6.2929 6.76979 6.28573 6.76979 6.27852C6.76979 5.9692 6.54508 5.71237 6.25 5.66234V3.80005Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.25 3.80005H3.75V5.67038C3.47464 5.7357 3.2698 5.98319 3.2698 6.27852C3.2698 6.28573 3.26992 6.2929 3.27016 6.30005H1.25V8.80005H3.33171C3.41244 8.96716 3.56537 9.09285 3.75 9.13665V11.3H6.25V9.14469C6.45225 9.11041 6.62144 8.97896 6.70788 8.80005H8.75V6.30005H6.76942C6.76966 6.2929 6.76979 6.28573 6.76979 6.27852C6.76979 5.9692 6.54508 5.71237 6.25 5.66234V3.80005Z"
          fill="#A0A0A0"
        />
        <path
          d="M3.75 3.80005V3.17505H3.125V3.80005H3.75ZM6.25 3.80005H6.875V3.17505H6.25V3.80005ZM3.75 5.67038L3.89426 6.27851L4.375 6.16447V5.67038H3.75ZM3.27016 6.30005V6.92505H3.91667L3.89481 6.27891L3.27016 6.30005ZM1.25 6.30005V5.67505H0.625V6.30005H1.25ZM1.25 8.80005H0.625V9.42505H1.25V8.80005ZM3.33171 8.80005L3.89448 8.52817L3.72388 8.17505H3.33171V8.80005ZM3.75 9.13665H4.375V8.64257L3.89426 8.52853L3.75 9.13665ZM3.75 11.3H3.125V11.925H3.75V11.3ZM6.25 11.3V11.925H6.875V11.3H6.25ZM6.25 9.14469L6.14554 8.52848L5.625 8.61673V9.14469H6.25ZM6.70788 8.80005V8.17505H6.31571L6.14511 8.52817L6.70788 8.80005ZM8.75 8.80005V9.42505H9.375V8.80005H8.75ZM8.75 6.30005H9.375V5.67505H8.75V6.30005ZM6.76942 6.30005L6.14478 6.27891L6.12292 6.92505H6.76942V6.30005ZM6.25 5.66234H5.625V6.19031L6.14554 6.27855L6.25 5.66234ZM3.75 4.42505H6.25V3.17505H3.75V4.42505ZM4.375 5.67038V3.80005H3.125V5.67038H4.375ZM3.8948 6.27852L3.89426 6.27851L3.60574 5.06226C3.05501 5.1929 2.6448 5.68705 2.6448 6.27852H3.8948ZM3.89481 6.27891L3.8948 6.27852H2.6448C2.6448 6.29278 2.64504 6.307 2.64552 6.32118L3.89481 6.27891ZM1.25 6.92505H3.27016V5.67505H1.25V6.92505ZM1.875 8.80005V6.30005H0.625V8.80005H1.875ZM3.33171 8.17505H1.25V9.42505H3.33171V8.17505ZM3.89426 8.52853L3.89448 8.52817L2.76894 9.07193C2.93005 9.4054 3.23493 9.65681 3.60574 9.74477L3.89426 8.52853ZM4.375 11.3V9.13665H3.125V11.3H4.375ZM6.25 10.675H3.75V11.925H6.25V10.675ZM5.625 9.14469V11.3H6.875V9.14469H5.625ZM6.35446 9.7609C6.76086 9.69201 7.09825 9.42876 7.27064 9.07193L6.14511 8.52817L6.14554 8.52848L6.35446 9.7609ZM8.75 8.17505H6.70788V9.42505H8.75V8.17505ZM8.125 6.30005V8.80005H9.375V6.30005H8.125ZM6.76942 6.92505H8.75V5.67505H6.76942V6.92505ZM6.14479 6.27852L6.14478 6.27891L7.39406 6.32118C7.39454 6.30701 7.39479 6.29279 7.39479 6.27852H6.14479ZM6.14554 6.27855L6.14479 6.27852H7.39479C7.39479 5.65926 6.94509 5.14626 6.35446 5.04613L6.14554 6.27855ZM5.625 3.80005V5.66234H6.875V3.80005H5.625Z"
          fill="#FECA00"
          mask={`url(#${ids[1]})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0H20V15H10V0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="10"
          y="0"
          width="10"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0H20V15H10V0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`} />
      </g>
    </svg>
  );
};
