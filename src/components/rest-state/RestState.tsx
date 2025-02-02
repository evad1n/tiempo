import React from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledRestState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    text-align: center;
    max-width: 500px;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: ${theme.spaceHalf};
`;

const Action = styled.div`
  margin-top: ${theme.space};
  margin-bottom: ${theme.spaceQuarter};
`;

export type RestStateProps = {
  label: string;
  subtitle: string;
  action?: React.ReactNode;
  icon?: string;
  className?: string;
};

export const RestState = ({
  label,
  subtitle,
  action,
  icon,
  className,
}: RestStateProps) => (
  <StyledRestState className={className}>
    {icon ? <Icon src={icon} /> : null}
    <Text type="title">{label}</Text>
    <Text type="subtitle">{subtitle}</Text>
    {action ? <Action>{action}</Action> : null}
  </StyledRestState>
);
