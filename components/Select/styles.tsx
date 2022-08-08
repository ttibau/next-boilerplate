import styled from 'styled-components';
import Select from 'react-select';

export const SelectComponent = styled(Select)`
  &.Select--multi {
    .Select-value {
      display: inline-flex;
      align-items: center;
    }
  }

  & .Select-placeholder {
    font-size: smaller;
  }
`;
