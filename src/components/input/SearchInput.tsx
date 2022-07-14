import React from 'react';

import { SearchIcon } from 'src/icons/SearchIcon';
import styled from 'styled-components';

import { InputMode } from './input-type/_FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  border: var(--amino-border);
  border-radius: var(--amino-radius);
  width: 100%;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--amino-space-double);
`;

const AminoInput = styled.input`
  padding-left: var(--amino-space-double);
  padding-right: var(--amino-space-half);
  height: 40px;
  font-weight: 500;
  line-height: 40px;
  border-radius: var(--amino-radius);
  outline: none;
  width: 100%;
  :focus {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }
`;

export type InputProps = {
  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  /** Placeholder text to be displayed in the input */
  placeholder?: string;

  /** Determines if the input is required for form validation */
  required?: boolean;

  /** Determines if the input is editable or not */
  readOnly?: boolean;

  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  inputMode?: InputMode;
  pattern?: string;
  autoFocus?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

export const SearchInput = ({
  autoFocus,
  className,
  disabled,
  inputMode,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  readOnly,
  required,
  tabIndex,
  value,
  ...props
}: InputProps) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel htmlFor={AminoInput}>
        <SearchIcon color="gray-base" size={20} />
      </StyledLabel>
      <AminoInput
        autoFocus={autoFocus}
        disabled={disabled}
        inputMode={inputMode}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder || 'search...'}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        type="search"
        value={value || ''}
        {...props}
      />
    </StyledWrapper>
  );
};
