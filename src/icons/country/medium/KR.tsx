import React from 'react';

import { useStableUniqueId } from 'hooks';

export const KR = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V15H20V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 11.3871C12.0017 11.3871 13.6244 9.66384 13.6244 7.53805C13.6244 5.41226 12.0017 3.68896 10 3.68896C7.99831 3.68896 6.37561 5.41226 6.37561 7.53805C6.37561 9.66384 7.99831 11.3871 10 11.3871Z"
            fill="#3D58DB"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="6"
            y="3"
            width="8"
            height="9"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 11.3871C12.0017 11.3871 13.6244 9.66384 13.6244 7.53805C13.6244 5.41226 12.0017 3.68896 10 3.68896C7.99831 3.68896 6.37561 5.41226 6.37561 7.53805C6.37561 9.66384 7.99831 11.3871 10 11.3871Z"
              fill="white"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7512 7.83294C13.7512 7.83294 13.5478 6.01797 12.0411 5.91944C10.5344 5.82092 10.1282 7.25043 10.0412 7.62917C9.95429 8.0079 9.73424 9.01821 8.14789 9.01821C6.56155 9.01821 6.41846 6.44919 6.41846 6.44919V3.41992H13.7512V7.83294Z"
              fill="#E31D1C"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.56215 1.28247L5.134 1.79967L2.48384 4.89461L1.91199 4.37741L4.56215 1.28247ZM5.50527 2.11944L6.07712 2.63665L3.52195 5.68675L2.9501 5.16955L5.50527 2.11944ZM7.01592 3.48393L6.44407 2.96673L3.8818 6.03998L4.45365 6.55718L7.01592 3.48393Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8524 1.06567L15.2804 1.58094L16.2726 2.74521L16.8445 2.22995L15.8524 1.06567ZM17.6159 3.20732L17.0439 3.72259L18.0361 4.88686L18.608 4.37159L17.6159 3.20732ZM13.3925 3.25793L13.9645 2.74267L14.9567 3.90694L14.3847 4.42221L13.3925 3.25793ZM15.728 4.88432L15.1561 5.39958L16.1482 6.56385L16.7202 6.04859L15.728 4.88432ZM14.3723 2.39443L14.9443 1.87916L17.7059 5.2422L17.1339 5.75747L14.3723 2.39443Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2844 8.9018L15.7076 8.38452L14.7071 9.55334L15.2839 10.0706L16.2844 8.9018ZM14.6023 10.9587L14.0255 10.4414L13.025 11.6102L13.6018 12.1275L14.6023 10.9587ZM17.5291 10.0204L18.1059 10.5377L17.1054 11.7065L16.5286 11.1892L17.5291 10.0204ZM16.5061 12.6422L15.9293 12.1249L14.9288 13.2938L15.5056 13.811L16.5061 12.6422ZM14.9791 11.2361L15.5559 11.7534L14.5116 13.0015L13.9348 12.4842L14.9791 11.2361ZM17.2693 9.67375L16.6925 9.15647L15.6482 10.4046L16.225 10.9218L17.2693 9.67375Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.00415 9.30612L4.57616 8.79028L7.12903 11.7155L6.55702 12.2314L4.00415 9.30612ZM4.59965 11.8647L5.17165 11.3488L6.24997 12.5335L5.67797 13.0494L4.59965 11.8647ZM2.69344 10.4317L2.12144 10.9475L4.68756 13.9121L5.25957 13.3963L2.69344 10.4317ZM3.10043 10.0951L3.67243 9.57923L4.60723 10.6754L4.03522 11.1912L3.10043 10.0951Z"
            fill="#272727"
          />
        </g>
      </g>
    </svg>
  );
};
