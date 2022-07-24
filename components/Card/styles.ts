import { MoreVert } from '@styled-icons/material';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  width: 25rem;
  align-items: flex-start;
  padding: 1rem;
`;

export const CardTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CardOptions = styled(MoreVert)`
  cursor: pointer;
  height: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColors.gray};
    border-radius: 50%;
  }
`;
