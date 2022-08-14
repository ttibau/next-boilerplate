import { Row } from '@tanstack/react-table';
import * as Styled from './styles';

import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TooltipComponent from '../Tooltip';
import Dialog from '../Dialog';
import { useContext } from 'react';
import { DialogContext } from '../context/DialogContext';

interface TableActionsProps {
  row: Row<any>;
  editAction?: boolean;
  deleteAction?: boolean;
}

const TableActions = ({ row, editAction, deleteAction }: TableActionsProps) => {
  const { openDialog } = useContext(DialogContext);
  return (
    <Styled.Container>
      {editAction && (
        <TooltipComponent
          trigger={
            <Styled.Icon
              onClick={() => {
                openDialog({
                  title: 'Edit Process',
                  content: <>Formulário aqui</>,
                });
              }}
              icon={faPenToSquare}
            />
          }
          variant='primary'
        >
          <span>Editar</span>
        </TooltipComponent>
      )}
      {deleteAction && (
        <TooltipComponent
          trigger={
            <Styled.Icon
              onClick={() => {
                openDialog({
                  title: 'Delete Process',
                  content: <>Tem certeza que deseja excluir este processo?</>,
                });
              }}
              icon={faTrashAlt}
            />
          }
          variant='danger'
        >
          <span>Excluir</span>
        </TooltipComponent>
      )}
    </Styled.Container>
  );
};

export default TableActions;
