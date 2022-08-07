import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  width: 100%;
  font-size: 1em;
  outline: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
