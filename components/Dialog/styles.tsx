import styled, { keyframes } from 'styled-components';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = styled(AlertDialogPrimitive.Overlay)`
  background-color: #8f8f8f;
  position: fixed;
  inset: 0 fixed;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const StyledContent = styled(AlertDialogPrimitive.Content)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 90vh;
  padding: 25px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:focus {
    outline: none;
  }
`;

export const StyledTitle = styled(AlertDialogPrimitive.Title)`
  margin: 0;
  color: #1a1523;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const StyledDescription = styled(AlertDialogPrimitive.Description)`
  margin-bottom: 20;
  color: #6f6e77;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

interface IContent {
  children: React.ReactNode;
}

function Content({ children, ...props }: IContent) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

export const StyledDialogTrigger = styled(AlertDialogPrimitive.Trigger)`
  user-select: none;
  background-color: transparent;
  border: none;
`;

export const DialogCancel = styled(AlertDialogPrimitive.Cancel)`
  width: 6rem;
  height: 35px;
  border-radius: 5px;
  background-color: #eeedef;
  color: rgb(111, 110, 119);
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-right: 1rem;
`;

export const DialogAction = styled(AlertDialogPrimitive.Action)`
  background-color: rgb(221, 243, 228);
  color: rgb(24, 121, 78);
  font-weight: bold;
  cursor: pointer;
  width: 6rem;
  height: 35px;
  border-radius: 4px;
  border: none;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DialogContent = styled.div`
  padding: 10px;
`;

export const Icon = styled.div``;

export const Label = styled.span``;

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = StyledDialogTrigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = DialogAction;
export const AlertDialogCancel = DialogCancel;
