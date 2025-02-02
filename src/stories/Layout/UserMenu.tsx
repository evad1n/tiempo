import React, { useState } from 'react';

import { DropdownAnimationInverse } from 'src/animations/DropdownAnimation';
import { Menu } from 'src/components/menu/Menu';
import { MenuItem } from 'src/components/menu/MenuItem';
import { VStack } from 'src/components/stack/VStack';
import { Surface } from 'src/components/surface/Surface';
import { Text } from 'src/components/text/Text';
import { TextAvatar } from 'src/components/text-avatar/TextAvatar';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const MenuWrapper = styled.div<{ addSpacing: boolean }>`
  border-top: ${theme.border};
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: visible;

  li {
    cursor: pointer;
  }

  strong {
    font-weight: 500;
  }
`;

const UserInfo = styled.button<{ addSpacing: boolean }>`
  width: 100%;
  border-radius: ${theme.radius};
  box-sizing: border-box;
  padding: ${p => p.addSpacing && theme.space};
  transition: ${theme.transition};
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    background: ${theme.hoverColor};
  }

  * {
    margin-bottom: 0;
  }

  span {
    font-size: 0.85rem;
  }
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: ${theme.spaceHalf};
`;

const StoreItem = styled.div`
  padding: ${theme.spaceHalf};
  transition: ${theme.transition};
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-top: ${theme.spaceHalfNegative};
  }

  &:hover {
    background: ${theme.hoverColor};
  }

  * {
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;
  }

  & > div {
    margin-right: ${theme.spaceHalf};
  }
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimationInverse.getName()} 250ms ease-in-out;
  animation-fill-mode: both;
  border: 1px solid ${theme.borderColor};
  z-index: 100;
  position: absolute;
  padding: ${theme.radius} 0;
  min-width: 100%;
  width: max-content;

  left: ${theme.spaceHalf};
  bottom: ${theme.spaceHalf};
`;

const StyledSubtitle = styled.span`
  opacity: 0.7;
  font-style: italic;
`;

const StyledVStack = styled(VStack)`
  text-align: left;
  min-width: 145.17px;
`;

interface Props {
  addSpacing?: boolean;
}

export const UserMenu = ({ addSpacing = true }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuWrapper addSpacing={addSpacing}>
        <UserInfo addSpacing={addSpacing} onClick={() => setOpen(!open)}>
          <Avatar />
          <StyledVStack spacing="none">
            <strong>Hello</strong>
            <StyledSubtitle title="Store 2458">Store #1234</StyledSubtitle>
          </StyledVStack>
        </UserInfo>

        {open && (
          <AnimatedSurface dense depth="depth16">
            <Menu>
              <StoreItem onClick={() => {}}>
                <TextAvatar label="Default" />
                <VStack spacing="none">
                  <strong>Test Store</strong>
                  <Text type="subtitle">Click to switch...</Text>
                </VStack>
              </StoreItem>

              <StoreItem>
                <TextAvatar label="Zonos" />
                <VStack spacing="none">
                  <strong>Switch to Zonos</strong>
                  <Text type="subtitle">Click to switch...</Text>
                </VStack>
              </StoreItem>

              <hr />

              <MenuItem>
                <span>Your profile</span>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://docs.zonos.com/support"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://docs.zonos.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Documentation
                </a>
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </AnimatedSurface>
        )}
      </MenuWrapper>
    </>
  );
};
