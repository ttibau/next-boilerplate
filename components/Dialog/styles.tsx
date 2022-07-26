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
  inset: 0fixed;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const StyledContent = styled(AlertDialogPrimitive.Content)`
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
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = StyledDialogTrigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
