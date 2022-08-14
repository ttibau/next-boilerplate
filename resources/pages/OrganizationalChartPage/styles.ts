import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

export const ChartContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
`;

export const TreeContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;
