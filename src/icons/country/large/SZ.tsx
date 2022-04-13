import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SZ = () => {
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
          d="M0 0H32V24H0V0Z"
          fill="#3D58DB"
        />
        <path
          d="M0 5H-1V6V18V19H0H32H33V18V6V5H32H0Z"
          fill="#C51918"
          stroke="#FFD018"
          strokeWidth="2"
        />
        <path
          d="M7.14932 9.33112C7.02937 9.33112 6.93213 9.05992 6.93213 8.72537C6.93213 8.39083 7.02937 8.11963 7.14932 8.11963H24.5601C24.6801 8.11963 24.7773 8.39083 24.7773 8.72537C24.7773 9.05992 24.6801 9.33112 24.5601 9.33112H7.14932Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0952 8.60229L25.1063 7.3125L26.8952 8.60229L25.1063 9.926L24.0952 8.60229Z"
          fill="#F7FCFF"
        />
        <path
          d="M7.14932 13.3311C7.02937 13.3311 6.93213 13.0599 6.93213 12.7254C6.93213 12.3908 7.02937 12.1196 7.14932 12.1196H24.5601C24.6801 12.1196 24.7773 12.3908 24.7773 12.7254C24.7773 13.0599 24.6801 13.3311 24.5601 13.3311H7.14932Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0952 12.6023L25.1063 11.3125L26.8952 12.6023L25.1063 13.926L24.0952 12.6023Z"
          fill="#F7FCFF"
        />
        <path
          d="M4.34541 15.8219C4.18458 15.8219 4.0542 15.5139 4.0542 15.1341C4.0542 14.7542 4.18458 14.4463 4.34541 14.4463H27.6896C27.8504 14.4463 27.9808 14.7542 27.9808 15.1341C27.9808 15.5139 27.8504 15.8219 27.6896 15.8219H4.34541Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.81738 12.0528C8.81738 12.0528 11.6587 6.07275 15.7226 6.07275C19.7866 6.07275 22.7235 12.0528 22.7235 12.0528C22.7235 12.0528 19.1373 17.9542 15.7704 17.9542C12.4035 17.9542 8.81738 12.0528 8.81738 12.0528Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="8"
          y="6"
          width="15"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.81738 12.0528C8.81738 12.0528 11.6587 6.07275 15.7226 6.07275C19.7866 6.07275 22.7235 12.0528 22.7235 12.0528C22.7235 12.0528 19.1373 17.9542 15.7704 17.9542C12.4035 17.9542 8.81738 12.0528 8.81738 12.0528Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9243 5.68018C15.9243 5.68018 14.997 6.80638 15.3061 7.8803C15.6152 8.95421 16.3354 8.84078 16.3354 9.78655C16.3354 10.7323 16.0027 11.6969 16.3354 11.6969C16.668 11.6969 16.7833 12.3495 16.4793 12.792C16.1752 13.2344 15.9063 13.2481 15.9243 13.9682C15.9423 14.6883 17.5163 15.3952 16.7538 15.3952C15.9913 15.3952 14.9864 16.1353 15.3061 16.1353C15.6259 16.1353 17.2987 16.7119 17.2987 17.4686C17.2987 18.2254 17.2987 18.831 17.2987 18.831H8.57129V5.68018H15.9243Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8192 9.9231H11.3848V11.6923H11.8192V9.9231ZM13.1006 9.9231H12.6662V11.6923H13.1006V9.9231ZM12.0255 9.9231H12.4599V11.6923H12.0255V9.9231ZM13.7413 9.9231H13.3069V11.6923H13.7413V9.9231ZM13.9477 9.9231H14.3821V11.6923H13.9477V9.9231ZM15.0228 9.9231H14.5884V11.6923H15.0228V9.9231ZM11.3848 12.4616H11.8192V14.2308H11.3848V12.4616ZM13.1006 12.4616H12.6662V14.2308H13.1006V12.4616ZM12.0255 12.4616H12.4599V14.2308H12.0255V12.4616ZM13.7413 12.4616H13.3069V14.2308H13.7413V12.4616ZM13.9477 12.4616H14.3821V14.2308H13.9477V12.4616ZM15.0228 12.4616H14.5884V14.2308H15.0228V12.4616Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.9774 9.9231H16.543V11.6923H16.9774V9.9231ZM18.2588 9.9231H17.8244V11.6923H18.2588V9.9231ZM17.1837 9.9231H17.6181V11.6923H17.1837V9.9231ZM18.8995 9.9231H18.4651V11.6923H18.8995V9.9231ZM19.1059 9.9231H19.5403V11.6923H19.1059V9.9231ZM20.181 9.9231H19.7466V11.6923H20.181V9.9231ZM16.543 12.4616H16.9774V14.2308H16.543V12.4616ZM18.2588 12.4616H17.8244V14.2308H18.2588V12.4616ZM17.1837 12.4616H17.6181V14.2308H17.1837V12.4616ZM18.8995 12.4616H18.4651V14.2308H18.8995V12.4616ZM19.1059 12.4616H19.5403V14.2308H19.1059V12.4616ZM20.181 12.4616H19.7466V14.2308H20.181V12.4616Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2316 7.07169C12.6231 7.26022 12.3447 8.85603 12.4127 9.24176C12.4807 9.62749 12.6872 9.19336 12.6872 9.19336C12.6872 9.19336 13.1082 10.1085 13.1516 10.3547C13.195 10.6009 13.4168 9.98251 13.4168 9.98251C13.4168 9.98251 14.1471 10.4856 14.2459 11.0462C14.3448 11.6069 14.4935 10.4047 14.4935 10.4047C14.4935 10.4047 14.6589 10.3755 14.6589 10.3755C14.6589 10.3755 14.5542 9.78194 14.5542 9.78194L14.8697 10.0517L14.7724 9.49968C14.7724 9.49968 15.01 9.8102 14.9497 9.46841C14.8895 9.12663 14.8558 8.93582 14.8558 8.93582L14.7735 8.46866L15.0857 8.4136C15.0857 8.4136 13.8401 6.88317 13.2316 7.07169Z"
            fill="#3D58DB"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.0884 13.6959C25.4564 13.7759 24.905 15.2991 24.905 15.6908C24.905 16.0825 25.1837 15.6908 25.1837 15.6908C25.1837 15.6908 25.4395 16.6651 25.4395 16.9151C25.4395 17.1651 25.7652 16.5947 25.7652 16.5947C25.7652 16.5947 26.3971 17.217 26.3971 17.7862C26.3971 18.3555 26.7522 17.1974 26.7522 17.1974C26.7522 17.1974 26.9202 17.1974 26.9202 17.1974C26.9202 17.1974 26.9202 16.5947 26.9202 16.5947L27.1841 16.9151V16.3546C27.1841 16.3546 27.3642 16.7016 27.3642 16.3546C27.3642 16.0075 27.3642 15.8138 27.3642 15.8138V15.3394H27.6813C27.6813 15.3394 26.7204 13.6159 26.0884 13.6959Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.59279 13.4652C6.22479 13.5452 6.77612 15.0684 6.77612 15.4601C6.77612 15.8518 6.49742 15.4601 6.49742 15.4601C6.49742 15.4601 6.24167 16.4344 6.24167 16.6844C6.24167 16.9344 5.91593 16.364 5.91593 16.364C5.91593 16.364 5.28408 16.9863 5.28408 17.5555C5.28408 18.1248 4.92891 16.9667 4.92891 16.9667C4.92891 16.9667 4.76092 16.9667 4.76092 16.9667C4.76092 16.9667 4.76092 16.364 4.76092 16.364L4.49706 16.6844V16.1239C4.49706 16.1239 4.31699 16.4709 4.31699 16.1239C4.31699 15.7768 4.31699 15.5831 4.31699 15.5831V15.1087H3.99989C3.99989 15.1087 4.9608 13.3852 5.59279 13.4652Z"
          fill="#3D58DB"
        />
      </g>
    </svg>
  );
};
