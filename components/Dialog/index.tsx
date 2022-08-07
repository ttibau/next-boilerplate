import { Add } from '@styled-icons/material';
import Button from '../Button';
import * as Styled from './styles';

interface IDialogProps {
  content: React.ReactNode;
  title?: string;
  action?: () => void;
  actionLabel?: string;
  cancelLabel?: string;
  cancel?: () => void;
  trigger: JSX.Element;
}

const Dialog = ({
  content,
  action,
  cancel,
  title,
  actionLabel,
  cancelLabel,
  trigger,
}: IDialogProps) => {
  return (
    <Styled.AlertDialog>
      <Styled.AlertDialogTrigger>{trigger}</Styled.AlertDialogTrigger>
      <Styled.AlertDialogContent>
        <Styled.AlertDialogTitle>{title}</Styled.AlertDialogTitle>
        <Styled.DialogContent>{content}</Styled.DialogContent>
        <Styled.ActionContainer>
          {cancel ? (
            <Styled.AlertDialogCancel>{cancelLabel}</Styled.AlertDialogCancel>
          ) : null}
          {action ? (
            <Styled.AlertDialogAction>{actionLabel}</Styled.AlertDialogAction>
          ) : null}
        </Styled.ActionContainer>
      </Styled.AlertDialogContent>
    </Styled.AlertDialog>
  );
};

export default Dialog;
