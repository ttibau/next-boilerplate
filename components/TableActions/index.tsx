import { Row } from '@tanstack/react-table';
import * as Styled from './styles';

import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TooltipComponent from '../Tooltip';
import Dialog from '../Dialog';

interface TableActionsProps {
  row: Row<any>;
  editAction?: boolean;
  deleteAction?: boolean;
}

const TableActions = ({ row, editAction, deleteAction }: TableActionsProps) => {
  return (
    <Styled.Container>
      {editAction && (
        <Dialog
          title='Delete process'
          trigger={
            <TooltipComponent
              variant='primary'
              trigger={<Styled.Icon icon={faPenToSquare} />}
            >
              <span>Editar</span>
            </TooltipComponent>
          }
          actionLabel='Add'
          content={<span>Formulário de edição aqui!</span>}
          cancel={() => {}}
          cancelLabel='Cancel'
          action={() => {}}
        />
      )}
      {deleteAction && (
        <Dialog
          title='Delete process'
          trigger={
            <TooltipComponent
              variant='danger'
              trigger={<Styled.Icon icon={faTrashAlt} />}
            >
              <span>Deletar</span>
            </TooltipComponent>
          }
          actionLabel='Delete'
          content={<span>Are you sure you want to delete this process?</span>}
          cancel={() => {}}
          cancelLabel='Cancel'
          action={() => {}}
        />
      )}
    </Styled.Container>
  );
};

export default TableActions;
