import React from 'react';

import { useStableUniqueId } from 'hooks';

export const EG = () => {
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
          fill="#F7FCFF"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V4H16V0H0Z"
            fill="#BF2714"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8V12H16V8H0Z"
            fill="#272727"
          />
          <path
            d="M6.13014 5.11011L6.62961 5.133L6.50424 7.86791L6.00476 7.84501L6.13014 5.11011Z"
            fill="#C09302"
          />
          <path
            d="M6.65199 5.27979L7.15119 5.30801L7.02581 7.52567L6.52661 7.49745L6.65199 5.27979Z"
            fill="#C09302"
          />
          <path
            d="M7.1742 5.44604L7.67253 5.48693L7.54715 7.01494L7.04883 6.97405L7.1742 5.44604Z"
            fill="#C09302"
          />
          <path
            d="M9.86986 5.11011L9.37039 5.133L9.49576 7.86791L9.99524 7.84501L9.86986 5.11011Z"
            fill="#C09302"
          />
          <path
            d="M9.34801 5.27979L8.84881 5.30801L8.97419 7.52567L9.47339 7.49745L9.34801 5.27979Z"
            fill="#C09302"
          />
          <path
            d="M8.8258 5.44604L8.32747 5.48693L8.45285 7.01494L8.95117 6.97405L8.8258 5.44604Z"
            fill="#C09302"
          />
          <path
            d="M7.98664 7.66339L7.49927 7.55172L7.70555 6.65137L8.19293 6.76303L7.98664 7.66339Z"
            fill="#C09302"
          />
          <path
            d="M8.35967 7.66339L8.84705 7.55172L8.64076 6.65137L8.15339 6.76303L8.35967 7.66339Z"
            fill="#C09302"
          />
          <path
            d="M8.23608 7.6552H7.73608V6.77124H8.23608V7.6552Z"
            fill="#C09302"
          />
          <path
            d="M7.31729 5.45654L7.81714 5.4688L7.78794 6.65926L7.28809 6.64699L7.31729 5.45654Z"
            fill="#C09302"
          />
          <path
            d="M8.1868 5.45654L8.68665 5.4688L8.65744 6.65926L8.15759 6.64699L8.1868 5.45654Z"
            fill="#C09302"
          />
          <path
            d="M6.66895 7.96136L6.7988 7.47852C7.32932 7.62119 7.73668 7.69175 8.01445 7.69175C8.29223 7.69175 8.69958 7.62119 9.23011 7.47852L9.35996 7.96136C8.79077 8.11443 8.3444 8.19175 8.01445 8.19175C7.6845 8.19175 7.23814 8.11443 6.66895 7.96136Z"
            fill="#C09302"
          />
          <path
            d="M6.14117 5.11133C6.10783 4.78103 6.30115 4.55744 6.62878 4.58595C6.73651 4.59533 6.85751 4.6272 7.01867 4.68188C7.06575 4.69803 7.06575 4.69803 7.11151 4.71423C7.33306 4.79303 7.39322 4.81328 7.4057 4.81595C7.35661 4.80483 7.5012 4.54345 7.53436 4.49939C7.53829 4.52737 7.52164 4.52339 7.48168 4.51539L7.03066 4.42512L7.35171 4.09575C7.46394 3.98062 7.61338 3.92352 7.78392 3.92352C7.80161 3.92352 7.8181 3.9227 7.87228 3.91937C7.91235 3.91693 7.91235 3.91693 7.9574 3.91507C8.26938 3.90496 8.49311 3.99318 8.49311 4.31401C8.49311 4.42879 8.50761 4.61336 8.53154 4.75339C8.53959 4.80049 8.55514 4.84458 8.50928 4.86394C8.51117 4.84723 8.62045 4.80411 8.79037 4.73305L8.81077 4.72452C9.30448 4.51845 9.36217 4.49933 9.52132 4.59605C9.62738 4.66051 9.72836 4.77645 9.84151 4.9493L9.42317 5.22315C9.35019 5.11166 9.29207 5.04401 9.26439 5.02511C9.32729 5.06881 9.11544 5.13916 9.00336 5.18594L8.98328 5.19433C8.59889 5.35509 8.54822 5.37427 8.4383 5.37427C8.13921 5.37427 8.03181 5.06789 8.00241 4.62911C7.91013 4.9329 7.63479 5.31627 7.40791 5.31627C7.30858 5.31627 7.35634 5.33199 6.94396 5.18532C6.90075 5.17003 6.90075 5.17003 6.85803 5.15537C6.73309 5.11298 6.64297 5.08921 6.58611 5.08413C6.58846 5.08145 6.59683 5.07244 6.60622 5.0644L6.14117 5.11133Z"
            fill="#C09302"
          />
        </g>
      </g>
    </svg>
  );
};
