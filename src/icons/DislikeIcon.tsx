import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const DislikeIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M20 14C20 14.5523 19.5523 15 19 15C18.4477 15 18 14.5523 18 14V5C18 4.44771 18.4477 4 19 4C19.5523 4 20 4.44772 20 5V14Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9587 13.6927V6H7.00916L6.04165 13.6364H8.60779C10.2989 13.6364 11.6698 14.9795 11.6698 16.6364V18H12.2893L14.504 15.0867C14.6658 14.8738 14.7827 14.6315 14.848 14.3739L14.8985 14.1746C14.9385 14.017 14.9587 13.8551 14.9587 13.6927ZM13.6203 19.5973C13.4277 19.8507 13.1242 20 12.8018 20H10.6491C10.0854 20 9.62846 19.5523 9.62846 19V16.6364C9.62846 16.0841 9.17149 15.6364 8.60779 15.6364H6.04165C4.81448 15.6364 3.86467 14.5831 4.01584 13.39L4.98336 5.75362C5.11026 4.75201 5.97899 4 7.00916 4H14.9586C16.0861 4 17 4.89543 17 6V13.6927C17 14.0176 16.9596 14.3412 16.8797 14.6565L16.8292 14.8558C16.6987 15.371 16.4648 15.8556 16.1411 16.2813L13.6203 19.5973Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
