import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 3rem;
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
