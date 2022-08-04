import { Row } from '@tanstack/react-table';
import * as Styled from './styles';

import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

interface TableActionsProps {
  row: Row<any>;
  edit?: boolean;
  delete?: boolean;
}

const TableActions = ({ row }: TableActionsProps) => {
  console.log(row);
  return (
    <Styled.Container>
      <Styled.Icon icon={faPenToSquare} />
      <Styled.Icon icon={faTrashAlt} />
    </Styled.Container>
  );
};

export default TableActions;
