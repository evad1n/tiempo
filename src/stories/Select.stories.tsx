import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Select, SelectProps } from 'src/components/select/Select';
import { FileIcon } from 'src/icons/FileIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 412px;
`;

const SelectMeta: Meta = {
  title: 'Amino/Select',
  component: Select,
  decorators: [
    withDesign,
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default SelectMeta;

const SelectTemplate: Story<SelectProps> = ({
  value: _value,
  ...props
}: SelectProps) => {
  const [value, setValue] = useState(_value);
  return <Select {...props} onChange={setValue} value={value} />;
};

export const BasicSelect = SelectTemplate.bind({});

BasicSelect.args = {
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: [
    {
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      label: 'Japanese Yen (JPY)',
      value: 'JPY',
    },
    {
      label: 'British Pound (GBP)',
      value: 'GBP',
    },
    {
      label: 'Swiss Frank (CHF)',
      value: 'CHF',
    },
    {
      label: 'Australian Dollar (AUD)',
      value: 'AUD',
    },
    {
      label: 'New Zealand Dollar (NZD)',
      value: 'NZD',
    },
  ],
};

BasicSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithIcon = SelectTemplate.bind({});

BasicSelectWithIcon.args = {
  error: true,
  helpText: 'This input is required',
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: [
    {
      label: 'US Dollar (USD)',
      value: 'USD',
    },
    {
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      label: 'Japanese Yen (JPY)',
      value: 'JPY',
    },
    {
      label: 'British Pound (GBP)',
      value: 'GBP',
    },
    {
      label: 'Swiss Frank (CHF)',
      value: 'CHF',
    },
    {
      label: 'Australian Dollar (AUD)',
      value: 'AUD',
    },
    {
      label: 'New Zealand Dollar (NZD)',
      value: 'NZD',
    },
  ],
};

BasicSelectWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const BasicSelectWithOptionIcon = SelectTemplate.bind({});

BasicSelectWithOptionIcon.args = {
  icon: <FlagIcon code="AE" iconScale="medium" />,
  label: 'Currencies',
  value: {
    label: 'US Dollar (USD)',
    value: 'USD',
  },
  options: [
    {
      label: 'US Dollar (USD)',
      icon: <FlagIcon code="AE" iconScale="small" />,
      value: 'USD',
    },
    {
      icon: <FlagIcon code="AD" iconScale="medium" />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
    {
      icon: <FlagIcon code="AE" iconScale="large" />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
};

BasicSelectWithOptionIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};

export const SelectWithDeveloperException = SelectTemplate.bind({});

SelectWithDeveloperException.args = {
  icon: <FileIcon size={20} />,
  label: 'Currencies',
  value: [
    {
      label: 'US Dollar (USD)',
      icon: <FileIcon size={14} />,
      value: 'USD',
    },
    {
      icon: <FileIcon size={14} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
  options: [
    {
      label: 'US Dollar (USD)',
      icon: <FileIcon size={14} />,
      value: 'USD',
    },
    {
      icon: <FileIcon size={14} />,
      label: 'European Euro (EUR)',
      value: 'EUR',
    },
  ],
};

SelectWithDeveloperException.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
