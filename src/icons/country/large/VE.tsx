import React from 'react';

import { useStableUniqueId } from 'hooks';

export const VE = () => {
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
            d="M0 0V8H32V0H0Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7367 11.8593L13.7194 11.3019L14.822 11.8593L14.426 10.7263L15.2496 9.89373H14.2015L13.7179 8.82153L13.3055 9.89373H12.076L13.0005 10.7114H11.9637L11.4802 9.63924L11.0678 10.7114H9.83828L10.7796 11.544L10.5997 12.2704H9.81513L9.33159 11.1982L8.91922 12.2704H7.68971L8.63105 13.103L8.45694 13.8058H8.11345L7.62992 12.7336L7.21755 13.8058H5.98804L6.92937 14.6384L6.64871 15.7714L7.6314 15.2139L8.73402 15.7714L8.33804 14.6384L9.16158 13.8058H9.10867L9.33307 13.6785L10.4357 14.236L10.0397 13.103L10.5116 12.6258L10.499 12.677L11.4816 12.1196L12.5843 12.677L12.1883 11.544L13.0066 10.7168L13.0174 10.7263L12.7367 11.8593Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2228 11.8156L18.2401 11.2582L17.1374 11.8156L17.5334 10.6826L16.7099 9.85002H17.758L18.2416 8.77783L18.6539 9.85002H19.8834L18.9589 10.6677H20.0007L20.4842 9.59554L20.8966 10.6677H22.1261L21.1847 11.5003L21.3647 12.2267H22.1492L22.6328 11.1545L23.0451 12.2267H24.2746L23.3333 13.0593L23.5074 13.7621H23.8509L24.3344 12.6899L24.7468 13.7621H25.9763L25.035 14.5947L25.3156 15.7277L24.333 15.1702L23.2303 15.7277L23.6263 14.5947L22.8028 13.7621H22.8557L22.6313 13.6348L21.5287 14.1923L21.9246 13.0593L21.4527 12.5821L21.4654 12.6333L20.4827 12.0759L19.3801 12.6333L19.7761 11.5003L18.9555 10.6707L18.9421 10.6826L19.2228 11.8156Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8328 10.5348L14.8501 11.0923L15.1308 9.95923L14.1895 9.12664H15.419L15.8313 8.05444L16.3149 9.12664H17.363L16.5395 9.95923L16.9354 11.0923L15.8328 10.5348Z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </svg>
  );
};
