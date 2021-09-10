import React from 'react';

import { IconProps } from 'types';
import { IconBase } from './IconBase';

export const PrinterIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.90363 3.75c0-.9665.7835-1.75 1.75-1.75h2.80728c.96649 0 1.74999.7835 1.74999 1.75v.53333h.6537c.9665 0 1.75.7835 1.75 1.75v3.62879c0 .96648-.7835 1.74998-1.75 1.74998h-.6537v.7537c0 .9665-.7835 1.75-1.74999 1.75H6.65363c-.9665 0-1.75-.7835-1.75-1.75v-.7537H4.25c-.9665 0-1.75-.7835-1.75-1.74998V6.03333c0-.9665.7835-1.75 1.75-1.75h.65363V3.75zm.01738 6.16212c.12027-.84925.85017-1.50241 1.73262-1.50241h2.80728c.88249 0 1.61239.65316 1.73259 1.50241h.6711c.138 0 .25-.11193.25-.25V6.03333c0-.13807-.112-.25-.25-.25H4.25c-.13807 0-.25.11193-.25.25v3.62879c0 .13807.11193.25.25.25h.67101zM9.71091 3.75v.53333H6.40363V3.75c0-.13807.11193-.25.25-.25h2.80728c.13807 0 .25.11193.25.25zm-3.30728 6.4097c0-.1381.11193-.24999.25-.24999h2.80728c.13807 0 .25.11189.25.24999v2.0061c0 .1381-.11193.25-.25.25H6.65363c-.13807 0-.25-.1119-.25-.25v-2.0061z"
      fill="currentColor"
    />
  </IconBase>
);
