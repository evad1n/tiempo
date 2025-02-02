import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MP = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          d="M0 0h17v12H0V0Z"
          fill="#2993EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.106 5.792c0 2.646 2.191 4.791 4.894 4.791 2.703 0 4.894-2.145 4.894-4.791C12.894 3.145 10.703 1 8 1 5.297 1 3.106 3.145 3.106 5.792Zm8.724 0c0 2.07-1.715 3.75-3.83 3.75s-3.83-1.68-3.83-3.75c0-2.071 1.715-3.75 3.83-3.75s3.83 1.679 3.83 3.75Z"
          fill="#F1F9FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.532 5.792c0 2.416 2 4.375 4.468 4.375s4.468-1.959 4.468-4.375-2-4.375-4.468-4.375-4.468 1.959-4.468 4.375Zm8.723 0c0 2.3-1.905 4.166-4.255 4.166-2.35 0-4.255-1.865-4.255-4.166S5.65 1.625 8 1.625c2.35 0 4.255 1.866 4.255 4.167Z"
          fill="#E31D1C"
        />
        <path
          d="M8 10.092c-2.428 0-4.393-1.927-4.393-4.3h-.15c0 2.459 2.035 4.45 4.543 4.45v-.15Zm4.393-4.3c0 2.373-1.965 4.3-4.393 4.3v.15c2.508 0 4.543-1.991 4.543-4.45h-.15ZM8 1.492c2.428 0 4.393 1.926 4.393 4.3h.15c0-2.46-2.035-4.45-4.543-4.45v.15Zm-4.393 4.3c0-2.374 1.965-4.3 4.393-4.3v-.15c-2.508 0-4.543 1.99-4.543 4.45h.15ZM8 10.033c2.39 0 4.33-1.897 4.33-4.241h-.15c0 2.258-1.87 4.091-4.18 4.091v.15ZM3.67 5.792c0 2.344 1.94 4.241 4.33 4.241v-.15c-2.31 0-4.18-1.833-4.18-4.091h-.15ZM8 1.55c-2.39 0-4.33 1.898-4.33 4.242h.15C3.82 3.533 5.69 1.7 8 1.7v-.15Zm4.33 4.242c0-2.344-1.94-4.242-4.33-4.242v.15c2.31 0 4.18 1.833 4.18 4.092h.15Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.293 2.875c-.183 0-.32.17-.28.349l.193.884a.287.287 0 0 0 .128.182.287.287 0 0 0-.109.192l-.694 5.823a.265.265 0 0 0 .129.265c.26.15.827.43 1.393.43.566 0 1.132-.28 1.394-.43a.265.265 0 0 0 .128-.265l-.694-5.823a.287.287 0 0 0-.109-.192.287.287 0 0 0 .128-.182l.194-.884a.287.287 0 0 0-.28-.349H7.292Z"
          fill="#A7A7A7"
        />
        <path
          d="M3.26 6.006a.16.16 0 0 1 .199-.103.156.156 0 0 1 .106.195c-.045.143-.045.353.004.63a1.403 1.403 0 0 0 .107.347l.04.084a.773.773 0 0 1 .068.342.158.158 0 0 1-.16.156.158.158 0 0 1-.16-.156.47.47 0 0 0-.042-.218l-.037-.079a1.6 1.6 0 0 1-.13-.423c-.057-.32-.057-.577.005-.775Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.106 8.09 6.05 9.49l.726-2.349L4.778 5.66l2.505-.05.823-2.318.823 2.318 2.506.05-1.997 1.482.726 2.35L8.106 8.09Z"
          fill="#F7FCFF"
        />
        <path
          d="M12.78 6.215a.16.16 0 0 0-.2-.104.156.156 0 0 0-.105.195c.044.143.044.354-.005.63a1.397 1.397 0 0 1-.146.432.773.773 0 0 0-.069.341c0 .086.072.156.16.156.088 0 .16-.07.16-.156a.47.47 0 0 1 .042-.217l.037-.08a1.607 1.607 0 0 0 .13-.422c.057-.32.057-.578-.004-.775Z"
          fill="#73BE4A"
        />
        <path
          d="M8.03 1.574s.583.26.331.667m.095-.667s.582.26.33.667"
          stroke="#73BE4A"
          strokeWidth=".5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.63 3.178a.137.137 0 0 1 .198-.049.165.165 0 0 1 .045.216c-.081.14-.123.332-.123.579 0 .086-.064.156-.144.156-.079 0-.143-.07-.143-.156 0-.302.054-.55.167-.746Z"
          fill="#73BE4A"
        />
        <path
          d="M4.404 4.606c0 .087-.064.157-.143.157-.08 0-.144-.07-.144-.157v-.445c0-.315.05-.563.154-.744a.137.137 0 0 1 .197-.05.164.164 0 0 1 .046.216c-.071.124-.11.317-.11.578v.445Zm7.338-.208c0 .086.064.156.144.156.079 0 .143-.07.143-.156v-.445c0-.315-.05-.563-.153-.744a.137.137 0 0 0-.198-.05.165.165 0 0 0-.046.216c.072.124.11.317.11.578v.445Z"
          fill="#73BE4A"
        />
        <path
          d="M12.168 5.127c0 .086.064.156.143.156.08 0 .144-.07.144-.156v-.445c0-.315-.05-.563-.154-.744a.137.137 0 0 0-.198-.05.164.164 0 0 0-.045.216c.071.124.11.317.11.578v.445Z"
          fill="#73BE4A"
        />
      </g>
    </FlagIconBase>
  );
});
