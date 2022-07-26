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
  triggerLabel: string;
  triggerIcon?: JSX.Element;
}

const Dialog = ({
  content,
  action,
  cancel,
  title,
  triggerLabel,
  triggerIcon,
  actionLabel,
  cancelLabel,
}: IDialogProps) => {
  return (
    <Styled.AlertDialog>
      <Styled.AlertDialogTrigger>
        <Button color='#FFF' label={triggerLabel} icon={triggerIcon} />
      </Styled.AlertDialogTrigger>
      <Styled.AlertDialogContent>
        <Styled.AlertDialogTitle>{title}</Styled.AlertDialogTitle>
        {content}
        {action ? (
          <Styled.AlertDialogAction>
            <Button label={actionLabel} onClick={action} />
          </Styled.AlertDialogAction>
        ) : null}
        {cancel ? (
          <Styled.AlertDialogCancel>{cancelLabel}</Styled.AlertDialogCancel>
        ) : null}
      </Styled.AlertDialogContent>
    </Styled.AlertDialog>
  );
};

export default Dialog;
