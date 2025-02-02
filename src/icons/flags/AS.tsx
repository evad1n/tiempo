import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
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
          d="M0 0h16v12H0V0Z"
          fill="#F7FCFF"
        />
        <path
          d="M0-.5h-.5v6.154L-1.424 6l.924.346V12.5H16l.176-.968L1.424 6 16.176.468 16-.5H0Z"
          fill="#3547A0"
          stroke="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.045 3.014s-4.032 1.046-4.032 1.208c0 .16-.363.67-.288.804.074.133.267.31.425.222.159-.089.535-.443.409-.222-.127.222.679.48.34.968 0 0 .407-.235.21 1.102l.97.277s1.085-.284.59-1.098h.574s-.238-1.054.114-1.249c.352-.194-.358-.342-.358-.342 1.502-.856 1.046-1.67 1.046-1.67Z"
          fill="#C44800"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m13.377 7.485-2.433-.411-.319-.427-1.382.278 1.213.688.408-.22 2.513.401v-.309Z"
          fill="#FFC221"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.751 7.86v-.242l-2.728-.166s-.165-.152-.57-.152c-.407 0-.453.318-.453.318s.233.464.684.464c.451 0 1.153.109 1.343.332.19.223.978-.115.978-.115s-.337-.579-.769-.398c-.431.181-1.213-.087-1.213-.185s2.728.143 2.728.143ZM9.143 5.907s-.265.567-.169.782c.423.44 1.19-.262 1.19-.262l-1.021-.52Z"
          fill="#FFC221"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.314 6.178c.28-.145.424-.412.424-.76 0-.27-.064-.482-.206-.617v-.183l-.247-.002c-2.22-.02-3.47.199-3.831.748-.367.556-.335 1.03.164 1.26l.22-.005c1.078-.562 2.174-.701 3.301-.421l.175-.02Zm-3.652-.676c.293-.444 1.5-.656 3.62-.636v.063c.137.065.206.228.206.488s-.096.44-.288.538c-1.187-.295-2.346-.147-3.477.443-.333-.154-.353-.453-.06-.896Z"
          fill="#979797"
        />
        <path
          d="M13.282 4.865c-2.12-.019-3.327.193-3.62.637-.292.443-.272.742.06.896 1.132-.59 2.29-.738 3.478-.443.192-.099.288-.278.288-.538s-.069-.423-.206-.488v-.064Z"
          fill="#F7FCFF"
        />
      </g>
    </FlagIconBase>
  );
});
