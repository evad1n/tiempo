import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CK = () => {
  const ids = useStableUniqueId(4);
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
          fill="#2E42A5"
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
          <rect width="11" height="9" fill="#2E42A5" />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="11"
            height="9"
          >
            <rect width="11" height="9" fill="white" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-1.25269 8.12494L1.22291 9.21069L11.3062 1.18052L12.612 -0.432938L9.96468 -0.795827L5.85197 2.6646L2.54165 4.99613L-1.25269 8.12494Z"
              fill="#F7FCFF"
            />
            <path
              d="M-0.913818 8.88555L0.347383 9.51562L12.143 -0.582947H10.3721L-0.913818 8.88555Z"
              fill="#F50100"
            />
            <path
              d="M12.5027 8.1248L10.3056 9.52051L-0.0561562 1.18038L-1.36198 -0.433076L1.28532 -0.795966L5.39803 2.66447L8.70835 4.99599L12.5027 8.1248Z"
              fill="#F7FCFF"
            />
            <path
              d="M12.4182 8.6707L11.157 9.30078L6.13431 4.97706L4.64518 4.49398L-1.48763 -0.427604H0.283246L6.41261 4.37716L8.04071 4.95642L12.4182 8.6707Z"
              fill="#F50100"
            />
            <mask
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="13"
              height="11"
              fill="black"
            >
              <rect fill="white" x="-1" y="-1" width="13" height="11" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              fill="#F50100"
            />
            <path
              d="M5 0V-0.9375H4.0625V0H5ZM6 0H6.9375V-0.9375H6V0ZM5 4V4.9375H5.9375V4H5ZM0 4V3.0625H-0.9375V4H0ZM0 5H-0.9375V5.9375H0V5ZM5 5H5.9375V4.0625H5V5ZM5 9H4.0625V9.9375H5V9ZM6 9V9.9375H6.9375V9H6ZM6 5V4.0625H5.0625V5H6ZM11 5V5.9375H11.9375V5H11ZM11 4H11.9375V3.0625H11V4ZM6 4H5.0625V4.9375H6V4ZM5 0.9375H6V-0.9375H5V0.9375ZM5.9375 4V0H4.0625V4H5.9375ZM0 4.9375H5V3.0625H0V4.9375ZM0.9375 5V4H-0.9375V5H0.9375ZM5 4.0625H0V5.9375H5V4.0625ZM5.9375 9V5H4.0625V9H5.9375ZM6 8.0625H5V9.9375H6V8.0625ZM5.0625 5V9H6.9375V5H5.0625ZM11 4.0625H6V5.9375H11V4.0625ZM10.0625 4V5H11.9375V4H10.0625ZM6 4.9375H11V3.0625H6V4.9375ZM5.0625 0V4H6.9375V0H5.0625Z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9069 9.28432L15.5693 8.82291L16.2102 9.28432L16.0109 8.4632L16.5256 7.94283H15.8705L15.5683 7.27271L15.3106 7.94283H14.5422L15.1305 8.4632L14.9069 9.28432ZM16.6648 10.0708L17.3272 9.60936L17.7185 9.89104L17.593 10.2173H16.8245L17.4129 10.7377L17.3039 11.1379L17.2277 10.9691L16.97 11.6392H16.2016L16.7899 12.1596L16.5663 12.9807L17.2287 12.5193L17.8696 12.9807L17.6703 12.1596L18.185 11.6392H17.53L17.4209 11.3974L17.8516 11.0974L18.4926 11.5588L18.2933 10.7377L18.808 10.2173H18.1529L17.8507 9.54722L17.8448 9.56256L17.7689 9.24965L18.2836 8.72928H17.6285L17.3263 8.05916L17.0686 8.72928H16.3001L16.8885 9.24965L16.6648 10.0708ZM15.636 13.2981L14.9736 13.7595L15.1973 12.9384L14.6623 12.4652L14.7934 13.0053L14.1524 12.5439L13.49 13.0053L13.7137 12.1842L13.1253 11.6638H13.8938L13.9457 11.5287L13.361 11.1077L12.6986 11.5691L12.9222 10.748L12.3339 10.2276H13.1023L13.36 9.55752L13.3955 9.63626L13.4929 9.27868L12.9046 8.7583H13.673L13.9308 8.08818L14.233 8.7583H14.8881L14.3734 9.27868L14.5726 10.0998L13.9317 9.63839L13.5244 9.92208L13.6622 10.2276H14.3173L13.8026 10.748L13.9742 11.4549L14.1515 10.9937L14.4537 11.6638H15.1088L14.5941 12.1842L14.6508 12.418H15.3774L15.6351 11.7479L15.9373 12.418H16.5924L16.0777 12.9384L16.2769 13.7595L15.636 13.2981Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};
