import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ES = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0Z"
          fill="#FFB400"
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
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v3h16V0H0Zm0 9v3h16V9H0Z"
            fill="#C51918"
          />
          <path fill="#F1F9FF" d="M2.504 5.136h.56v2.912h-.56z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.288 4.632H2.28v.28h.168v.224h.672v-.224h.168v-.28ZM3.12 8.216h.168v.28H2.28v-.28h.168v-.224h.672v.224Z"
            fill="#C88A02"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.784 4.688c.122 0 .134-.046.206-.114.056-.054.186-.12.186-.194 0-.17-.176-.308-.392-.308-.217 0-.392.138-.392.308 0 .083.09.138.157.194.072.058.124.114.235.114Z"
            fill="#AD1619"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.28 8.496h1.008v.448s-.126-.056-.252-.056-.252.056-.252.056-.126-.056-.252-.056-.252.056-.252.056v-.448Z"
            fill="#005BBF"
          />
          <path fill="#F1F9FF" d="M7.992 5.136h.56v2.912h-.56z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.776 4.632H7.768v.28h.168v.224h.672v-.224h.168v-.28Zm-.168 3.584h.168v.28H7.768v-.28h.168v-.224h.672v.224Z"
            fill="#C88A02"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.272 4.688c.122 0 .134-.046.206-.114.056-.054.186-.12.186-.194 0-.17-.175-.308-.392-.308-.216 0-.392.138-.392.308 0 .083.09.138.157.194.072.058.124.114.235.114Z"
            fill="#AD1619"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.768 8.496h1.008v.448s-.126-.056-.252-.056-.252.056-.252.056-.126-.056-.252-.056-.252.056-.252.056v-.448Z"
            fill="#005BBF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.494 7.84c.101-.122.157-.234.157-.352a.316.316 0 0 0-.06-.192l.006-.003s.11-.048.15-.067c.072-.034.135-.07.197-.116.04-.028.092-.06.173-.103l.096-.051.096-.053a.62.62 0 0 0 .183-.144.268.268 0 0 0-.061-.399.728.728 0 0 0-.301-.096l-.197-.03a4.931 4.931 0 0 1-.177-.03c.345-.057.836-.036 1.052.076l.206-.398c-.44-.228-1.445-.204-1.82.054-.275.19-.238.476.048.6.12.05.276.085.564.131a1.431 1.431 0 0 0-.126.081.799.799 0 0 1-.127.075 6.71 6.71 0 0 1-.125.055l-.017.008c-.233.106-.346.252-.312.517l.018.143.033.01.344.284Zm-.288-.37v.002-.002Zm6.147.018c0 .118.056.23.157.352l.344-.284.033-.01.018-.143c.034-.265-.079-.411-.312-.517l-.016-.008a6.704 6.704 0 0 1-.125-.055.8.8 0 0 1-.128-.075 1.431 1.431 0 0 0-.126-.08c.289-.047.445-.081.564-.133.286-.123.323-.41.048-.6-.375-.257-1.379-.28-1.82-.053l.206.398c.216-.112.708-.133 1.052-.075l-.177.029-.196.03a.728.728 0 0 0-.301.096.268.268 0 0 0-.062.4.605.605 0 0 0 .183.143l.096.053.096.05c.081.044.134.076.173.104.062.045.126.082.198.116.039.02.15.068.15.067l.006.003a.316.316 0 0 0-.061.192Z"
            fill="#AD1619"
          />
          <path
            d="m2.962 6.2.165.034v.247c-.176.14-.623.377-.623.377V6.2h.458Zm5.195 0-.165.034v.247c.176.14.623.377.623.377V6.2h-.458Z"
            fill="#F1F9FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.388 3.603v-.082a1.53 1.53 0 0 0-.905-.31 1.806 1.806 0 0 0-.918-.157c-.465-.046-.934.157-.934.157-.473 0-.905.31-.905.31v.082l.565.567s.159.546 1.272.418v.001s.737-.02.79-.037l.063-.02c.144-.041.309-.09.407-.362l.565-.567Zm-1.825-.518Z"
            fill="#AD1619"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m3.76 3.7.038-.042.513.483c.097-.026.626-.16 1.216-.168h.045a5.281 5.281 0 0 1 1.232.172s-.006.053-.021.116l.056-.11.006-.006.517-.487.038.041-.514.483c-.075.138-.112.23-.112.267 0 .058-.15.092-.444.128-.23.027-.5.046-.722.048h-.056a7.222 7.222 0 0 1-.722-.048c-.294-.036-.444-.07-.444-.128a.118.118 0 0 0-.004-.027.44.44 0 0 1-.064-.154 2.84 2.84 0 0 0-.044-.086L3.76 3.7Zm2.867.75c.039.019.07 0 .095-.035a.18.18 0 0 0-.004.027.541.541 0 0 1-.098.032 3.068 3.068 0 0 1-.296.047c-.238.029-.52.047-.744.049a7.095 7.095 0 0 1-.744-.049 3.067 3.067 0 0 1-.296-.047.633.633 0 0 1-.073-.02l.006-.003c.122-.058.93-.111 1.077-.12.145.009.954.062 1.077.12Zm.154-.01-.001.001Z"
            fill="#C88A02"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.556 2.674a.168.168 0 1 0 0-.336.168.168 0 0 0 0 .336Z"
            fill="#005BBF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.493 2.038h.117v.074h.076v.117H5.61v.233h.076v.117h-.27v-.117h.077v-.233h-.077v-.117h.077v-.074Z"
            fill="#C88A02"
          />
          <path fill="#C88A02" d="M5.472 2.672h.224V3.4h-.224z" />
          <path
            d="m3.854 3.649-.308-.012c.145-.839.86-1.25 2.002-1.25 1.144 0 1.856.413 1.99 1.255l-.415.044c-.066-.41-.752-.78-1.569-.78-.818-.001-1.629.33-1.7.743Z"
            fill="#C88A02"
          />
          <path
            opacity=".3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.736 4.632h3.64v3.27S7.106 9 5.556 9s-1.82-1.126-1.82-1.126V4.632Z"
            fill="#E1E5E8"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="3"
            y="4"
            width="5"
            height="5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.736 4.632h3.64v3.27S7.106 9 5.556 9s-1.82-1.126-1.82-1.126V4.632Z"
              fill="#fff"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path fill="#FFC034" d="M3.736 6.648h1.848v2.184H3.736z" />
            <path fill="#AD1619" d="M3.736 4.576h1.848v2.128H3.736z" />
            <path fill="#AD1619" d="M5.528 6.592h1.848V8.72H5.528z" />
            <path fill="#F1F9FF" d="M5.528 4.632h1.96v2.072h-1.96z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.741 8.722s-1.186.093-1.186-.672c0 0-.011.672-1.25.672v.603h2.436v-.603Z"
              fill="#F1F9FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.556 7.096c.232 0 .42-.2.42-.448 0-.247-.188-.448-.42-.448-.232 0-.42.2-.42.448s.188.448.42.448Z"
              fill="#005BBF"
              stroke="#AD1619"
              strokeWidth=".583"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill="#C88A02"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill="#C37C9C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill="#FFC034"
          />
          <path d="M4.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" fill="#AD1619" />
        </g>
      </g>
    </FlagIconBase>
  );
});
