import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
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
    background-color: ${(props) => props.theme.colors.lightGreen};
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 12px 15px;
`;
