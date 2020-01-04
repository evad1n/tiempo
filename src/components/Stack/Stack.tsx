import React from "react";
import styled from "styled-components";

const AminoStack = styled.div`
  display: flex;
`;

const ColumnStack = styled(AminoStack)`
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: var(--amino-space-half);
  }

  & :last-child {
    margin-bottom: 0;
  }
`;

const RowStack = styled(AminoStack)`
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: var(--amino-space-half);
  }

  & :last-child {
    margin-right: 0;
  }
`;

export enum StackType {
  row,
  column
}

type Props = {
  type?: StackType;
};

export const Stack: React.FC<Props> = ({ type, children }) => {
  switch (type) {
    case StackType.column:
      return <ColumnStack>{children}</ColumnStack>;
    case StackType.row:
    default:
      return <RowStack>{children}</RowStack>;
  }
};
