import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TF = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="#2E42A5"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7889 6.19995H22.7972H22.8288H26.8372L26.053 7.70397H23.6113V8.51184H25.4832L24.7207 9.91106H23.6113V12.7093L25.4385 9.83007L27.8032 13.9247H26.8372L26.4998 13.4764H24.3594L22.8544 16.2573L22.8548 16.4109L22.813 16.3337L22.7713 16.4109L22.7717 16.2573L21.2666 13.4764H19.1263L18.7889 13.9247H17.8228L20.1875 9.83007L22.0147 12.7093V7.70397H19.573L18.7889 6.19995ZM25.4856 11.5095L24.9604 12.3172H25.9547L25.4856 11.5095ZM20.1404 11.5095L20.6656 12.3172H19.6714L20.1404 11.5095ZM16.3137 10.6132L17.1447 10.0005L17.9757 10.6132L17.6825 9.58649L18.4893 8.93845L17.4771 8.9166L17.1447 7.90341L16.8123 8.9166L15.8 8.93845L16.6068 9.58649L16.3137 10.6132ZM28.4554 10.0005L27.6244 10.6132L27.9176 9.58649L27.1108 8.93845L28.123 8.9166L28.4554 7.90341L28.7878 8.9166L29.8 8.93845L28.9933 9.58649L29.2864 10.6132L28.4554 10.0005ZM25.0795 17.8033L25.9105 17.1906L26.7415 17.8033L26.4484 16.7766L27.2551 16.1285L26.2429 16.1067L25.9105 15.0935L25.5781 16.1067L24.5659 16.1285L25.3726 16.7766L25.0795 17.8033ZM19.6896 17.1906L18.8586 17.8033L19.1517 16.7766L18.345 16.1285L19.3572 16.1067L19.6896 15.0935L20.022 16.1067L21.0342 16.1285L20.2275 16.7766L20.5206 17.8033L19.6896 17.1906ZM21.969 20.2L22.8 19.5873L23.6311 20.2L23.3379 19.1733L24.1447 18.5252L23.1325 18.5034L22.8 17.4902L22.4676 18.5034L21.4554 18.5252L22.2622 19.1733L21.969 20.2Z"
            fill="#F7FCFF"
          />
          <rect
            x="-0.5"
            y="-0.5"
            width="13"
            height="11"
            fill="#2E42A5"
            stroke="white"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="-1"
            width="14"
            height="12"
          >
            <rect
              x="-0.5"
              y="-0.5"
              width="13"
              height="11"
              fill="white"
              stroke="white"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0H12V10H8V0Z"
              fill="#F50100"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H4V10H0V0Z"
              fill="#2E42A5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0H8V10H4V0Z"
              fill="#F7FCFF"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
