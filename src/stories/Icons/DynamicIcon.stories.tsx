import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import * as icons from 'icons';
import {
  DynamicIcon,
  DynamicIconProps,
  DynamicIconType,
} from 'icons/DynamicIcon';

const IconsMeta: Meta = {
  title: 'Amino/Icons',
  argTypes: {
    size: {
      defaultValue: 30,
      type: 'number',
    },
    type: {
      defaultValue: Object.keys(icons).find(Boolean),
      options: Object.keys(icons),
      mapping: Object.values(icons),
      control: {
        type: 'select',
      },
    },
  },
};

export default IconsMeta;

const isDuoTone = (iconName: DynamicIconType) =>
  iconName.includes('DuotoneIcon');

const DynamicIconTemplate: Story<DynamicIconProps> = ({
  size,
  type,
}: DynamicIconProps) => (
  <DynamicIcon
    size={size}
    type={type}
    color={isDuoTone(type) ? `gray-400` : undefined}
  />
);

export const DynamicIconDemo = DynamicIconTemplate.bind({});
