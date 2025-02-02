import React, { useRef } from 'react';

import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { type FloatLabelInputProps, FloatLabelInput } from './_FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledButtonAction = styled.button`
  padding: ${theme.radiusSm};
  border-radius: ${theme.radiusSm};
  transition: ${theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;
const AminoInput = styled(FloatLabelInput)`
  && input {
    padding-right: ${theme.spaceDouble};
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const NumberInput = ({
  autoFocus,
  className,
  disabled,
  error,
  inputMode,
  label,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  prefix,
  readOnly,
  required,
  suffix,
  tabIndex,
  value,
  ...props
}: FloatLabelInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledWrapper className={className}>
      <AminoInput
        aria-label={label}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        inputMode={inputMode}
        label={label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        ref={inputRef}
        required={required}
        suffix={
          suffix || (
            <StyledActionWrapper>
              <StyledButtonAction
                onClick={() => {
                  inputRef.current?.stepUp();
                  inputRef.current?.dispatchEvent(
                    new Event('input', { bubbles: true })
                  );
                }}
              >
                <ChevronUpIcon size={16} />
              </StyledButtonAction>
              <StyledButtonAction
                onClick={() => {
                  inputRef.current?.stepDown();
                  inputRef.current?.dispatchEvent(
                    new Event('input', { bubbles: true })
                  );
                }}
              >
                <ChevronDownIcon size={16} />
              </StyledButtonAction>
            </StyledActionWrapper>
          )
        }
        tabIndex={tabIndex}
        type="number"
        value={value}
        {...props}
      />
    </StyledWrapper>
  );
};
