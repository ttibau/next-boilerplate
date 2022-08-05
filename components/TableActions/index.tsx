import { Row } from '@tanstack/react-table';
import * as Styled from './styles';

import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TooltipComponent from '../Tooltip';

interface TableActionsProps {
  row: Row<any>;
  edit?: boolean;
  delete?: boolean;
}

const TableActions = ({ row }: TableActionsProps) => {
  return (
    <Styled.Container>
      <TooltipComponent
        variant='primary'
        trigger={<Styled.Icon icon={faPenToSquare} />}
      >
        <span>Editar</span>
      </TooltipComponent>
      <TooltipComponent
        variant='danger'
        trigger={<Styled.Icon icon={faTrashAlt} />}
      >
        <span>Deletar</span>
      </TooltipComponent>
    </Styled.Container>
  );
};

export default TableActions;
