import { useContext } from 'react';
import { DialogContext } from '../context/DialogContext';
import * as Styled from './styles';

interface IDialogProps {
  action?: () => void;
  actionLabel?: string;
  cancelLabel?: string;
  cancel?: () => void;
  trigger: JSX.Element;
}

const Dialog = ({ trigger }: IDialogProps) => {
  const { open, title, dialog } = useContext(DialogContext);
  return (
    <Styled.AlertDialog open={open}>
      <Styled.AlertDialogTrigger>{trigger}</Styled.AlertDialogTrigger>
      <Styled.AlertDialogContent>
        <Styled.AlertDialogTitle>
          {dialog && dialog.title}
        </Styled.AlertDialogTitle>
        <Styled.DialogContent>{dialog && dialog.content}</Styled.DialogContent>
        {/* <Styled.ActionContainer>
          {cancel ? (
            <Styled.AlertDialogCancel>{cancelLabel}</Styled.AlertDialogCancel>
          ) : null}
          {action ? (
            <Styled.AlertDialogAction>{actionLabel}</Styled.AlertDialogAction>
          ) : null}
        </Styled.ActionContainer> */}
      </Styled.AlertDialogContent>
    </Styled.AlertDialog>
  );
};

export default Dialog;
