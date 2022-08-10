import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  text-align: left;
  font-weight: bold;
`;

interface TableRowProps {
  isActive?: boolean;
}

export const TableRow = styled.tr<TableRowProps>`
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  color: ${(props) => (props.isActive ? props.theme.colors.primary : '#000')};

  :last-child {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }

  :nth-of-type(even) {
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  :hover {
    background-color: ${(props) => props.theme.colors.lightPrimary};
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 12px 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  width: 20%;
`;
