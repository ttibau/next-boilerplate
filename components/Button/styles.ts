import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 8px;
`;
