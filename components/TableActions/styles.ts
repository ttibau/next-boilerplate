import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div``;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  padding: 5px;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
