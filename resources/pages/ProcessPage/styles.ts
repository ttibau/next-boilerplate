import styled from 'styled-components';

export const Container = styled.div``;

export const CardCounter = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const CardContent = styled.div`
  padding: 10px 0 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 3rem;
`;
