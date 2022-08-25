import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;
