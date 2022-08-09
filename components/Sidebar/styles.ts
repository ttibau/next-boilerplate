import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: ${({ theme }) => theme.colors.background};
  width: ${(props) => (props.isOpened ? '20vw' : '0vw')};
  transition: width 0.5s;
  overflow: hidden;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;
