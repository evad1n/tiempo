import React, { ReactNode } from 'react';

import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  tooltipClasses,
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import styled from 'styled-components';

const StyledTitle = styled(Text)`
  margin-top: 3px;
`;

const StyledCaption = styled(Text)`
  margin-top: 3px;
`;

const NoTooltipWrapper = styled.div``;

const HiddenSpan = styled.span`
  display: none;
`;

const ChildWrapper = styled.div`
  position: relative;
  [disabled] + ${HiddenSpan} {
    display: block;
    cursor: not-allowed;
    z-index: 100000;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export type TooltipProps = {
  children: ReactNode;
  className?: string;
  showTooltip: boolean;
  subtitle: string | null;
  tag?: 'div' | 'span';
  title?: string;
};

const StyledTooltip = muiStyled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#0C0C0D',
    boxShadow: 'var(--amino-v3-shadow-large)',
  },
}));

export const Tooltip = ({
  className,
  children,
  showTooltip,
  subtitle,
  tag,
  title,
}: TooltipProps) => {
  if (showTooltip) {
    return (
      <StyledTooltip
        className={className}
        title={
          <VStack spacing="space-quarter">
            {title && (
              <StyledTitle type="small-header" isUppercase={false}>
                {title}
              </StyledTitle>
            )}
            <StyledCaption type="caption">{subtitle}</StyledCaption>
          </VStack>
        }
      >
        <ChildWrapper as={tag}>
          {children}
          <HiddenSpan />
        </ChildWrapper>
      </StyledTooltip>
    );
  }

  return <NoTooltipWrapper as={tag}>{children}</NoTooltipWrapper>;
};
