import { Row } from '@tanstack/react-table';
import * as Styled from './styles';

import { faTrashAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TooltipComponent from '../Tooltip';
import { useContext } from 'react';
import { DialogContext } from '../context/DialogContext';
import Button from '../Button';

interface TableActionsProps {
  row: Row<any>;
  editAction?: () => void;
  deleteAction?: () => void;
}

interface ActionProps {
  action: () => void;
}

const DeleteContent = ({ action }: ActionProps) => {
  const { closeDialog } = useContext(DialogContext);
  return (
    <>
      <p>Deseja realmente excluir este registro?</p>
      <Styled.ButtonsContainer>
        <Button
          outline
          onClick={closeDialog}
          label='Cancel'
          color='secondary'
        />
        <Button onClick={action} type='submit' label='Save' color='primary' />
      </Styled.ButtonsContainer>
    </>
  );
};

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
                  content: <DeleteContent action={deleteAction} />,
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
