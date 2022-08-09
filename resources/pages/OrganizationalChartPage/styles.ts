import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 3rem;
`;
