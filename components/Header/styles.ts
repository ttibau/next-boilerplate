import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
`;

export const TitleContainer = styled.div`
  margin: auto;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;
