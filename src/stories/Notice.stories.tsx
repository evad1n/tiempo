import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Notice, type NoticeProps } from 'src/components/Notice/Notice';
import { withDesign } from 'storybook-addon-designs';

const NoticeStories: Meta = {
  title: 'Amino/Notice',
  component: Notice,
  decorators: [withDesign],
};

export default NoticeStories;

const Template: Story<NoticeProps> = ({ intent, children }: NoticeProps) => (
  <Notice intent={intent}>{children}</Notice>
);

export const DefaultNotice = Template.bind({});
DefaultNotice.args = {
  children: 'Example notice',
};
DefaultNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A98',
  },
};

export const InfoNotice = Template.bind({});
InfoNotice.args = {
  intent: 'info',
  children: 'Info notice',
};
InfoNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A98',
  },
};

export const PrimaryNotice = Template.bind({});
PrimaryNotice.args = {
  intent: 'primary',
  children: 'Primary notice',
};
PrimaryNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A106',
  },
};

export const WarningNotice = Template.bind({});
WarningNotice.args = {
  intent: 'warning',
  children: 'Warning notice',
};
WarningNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A114',
  },
};

export const ErrorNotice = Template.bind({});
ErrorNotice.args = {
  intent: 'error',
  children: 'Error notice',
};
ErrorNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A110',
  },
};

export const SuccessNotice = Template.bind({});
SuccessNotice.args = {
  intent: 'success',
  children: 'Success notice',
};
SuccessNotice.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A118',
  },
};
