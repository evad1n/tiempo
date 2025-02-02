import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { CardProps } from 'src/components/card/Card';
import { DangerZone } from 'src/components/danger-zone/DangerZone';

const DangerZoneMeta: Meta = {
  title: 'Amino/DangerZone',
  component: DangerZone,
};

export default DangerZoneMeta;

const Template: Story<CardProps> = ({
  label,
  children,
  actions,
  footerActions,
}: CardProps) => (
  <DangerZone label={label} actions={actions} footerActions={footerActions}>
    {children}
  </DangerZone>
);

export const BasicDangerZone = Template.bind({});
BasicDangerZone.args = {
  children: 'Danger zone contents',
  label: 'My danger zone',
};
