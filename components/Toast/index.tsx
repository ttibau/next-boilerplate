import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

interface IToastProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
}

const ToastComponent = ({ variant }: IToastProps) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  return (
    <Styled.ToastProvider swipeDirection='right'>
      <button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        asdf
      </button>
      <Styled.Toast variant={variant} open={open} onOpenChange={setOpen}>
        <Styled.ToastTitle>Scheduled: Catch up</Styled.ToastTitle>
        <Styled.ToastDescription asChild>asdf</Styled.ToastDescription>
        <Styled.ToastAction asChild altText='Goto schedule to undo'>
          <button>Undo</button>
        </Styled.ToastAction>
      </Styled.Toast>
      <Styled.ToastViewport />
    </Styled.ToastProvider>
  );
};

export default ToastComponent;
