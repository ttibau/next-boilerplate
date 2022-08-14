import { useContext } from 'react';
import { DialogContext } from '../context/DialogContext';
import * as Styled from './styles';
import { Close } from '@styled-icons/material';

const Dialog = () => {
  const { open, dialog, closeDialog } = useContext(DialogContext);
  return (
    <Styled.AlertDialog open={open}>
      <Styled.AlertDialogContent>
        <Styled.Header>
          <Styled.AlertDialogTitle>
            {dialog && dialog.title}
          </Styled.AlertDialogTitle>
          <Styled.CloseBtn onClick={closeDialog}>
            <Close />
          </Styled.CloseBtn>
        </Styled.Header>
        <Styled.DialogContent>{dialog && dialog.content}</Styled.DialogContent>
      </Styled.AlertDialogContent>
    </Styled.AlertDialog>
  );
};

export default Dialog;
