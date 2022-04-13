import React from 'react';

import { useStableUniqueId } from 'hooks';

export const PY = () => {
  const ids = useStableUniqueId(2);
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
          fill="#F7FCFF"
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
            d="M19.825 12C19.825 14.1125 18.1125 15.825 16 15.825C13.8875 15.825 12.175 14.1125 12.175 12C12.175 9.88751 13.8875 8.175 16 8.175C18.1125 8.175 19.825 9.88751 19.825 12Z"
            stroke="#272727"
            strokeWidth="0.35"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12C19 11.1144 18.6162 10.3183 18.0059 9.76919C17.4744 9.291 16.7712 9 16 9C15.3512 9 14.7506 9.20594 14.2598 9.55601C13.4972 10.1 13 10.9919 13 12ZM18.65 12C18.65 13.4636 17.4636 14.65 16 14.65C14.5364 14.65 13.35 13.4636 13.35 12C13.35 11.1059 13.7927 10.3153 14.471 9.83536C14.903 9.52965 15.4305 9.35 16 9.35C16.7073 9.35 17.3499 9.62712 17.8251 10.0787C18.3332 10.5615 18.65 11.2438 18.65 12Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V8H32V0H0Z"
            fill="#F05234"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#3D58DB"
          />
          <path
            d="M14.6167 10.0021L14.9013 10.4132C14.2414 10.8701 13.9427 11.4064 14.1866 12.3165C14.4281 13.2179 14.9947 13.6653 15.9377 13.698L15.9204 14.1977C14.7583 14.1574 13.9733 13.6811 13.6747 12.5667C13.3785 11.4611 13.7749 10.5849 14.6167 10.0021Z"
            fill="#73BE4A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 12.315L15.1183 12.9135L15.4151 11.89L14.5734 11.2364L15.6385 11.2024L16 10.2L16.3615 11.2024L17.4266 11.2364L16.5849 11.89L16.8817 12.9135L16 12.315Z"
            fill="#FBCD17"
          />
          <path
            d="M17.1677 10.176C17.1677 10.176 18.2939 10.9557 17.8888 12.4675C17.4837 13.9793 15.9048 14.0341 15.9048 14.0341"
            stroke="#73BE4A"
            strokeWidth="0.5"
          />
          <path d="M14.5642 9.0437L15.031 9.76192Z" fill="#F7FCFF" />
        </g>
      </g>
    </svg>
  );
};
