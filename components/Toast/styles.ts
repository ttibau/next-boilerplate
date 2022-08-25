import styled, { keyframes, css } from 'styled-components';

import * as ToastPrimitive from '@radix-ui/react-toast';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${VIEWPORT_PADDING}px;
  gap: 10;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

const variantOptions = {
  primary: {
    backgroundColor: '#0070f3',
  },
  secondary: {
    backgroundColor: '#f3f3f3',
  },
  success: {
    backgroundColor: '#027A48',
  },
  danger: {
    backgroundColor: '#c0392b',
  },
};

interface ToastProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
}

const StyledToast = styled(ToastPrimitive.Root)<ToastProps>`
  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
    `};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    &[data-state='closed'] {
      animation: ${hide} 100ms ease-in;
    }
    &[data-swipe='move'] {
      transform: translateX(100);
    }
    &[data-swipe='cancel'] {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }
    &[data-swipe='end'] {
      transform: translateX(0);
      animation: ${swipeOut} 100ms ease-out;
    }
  }
`;

const StyledTitle = styled(ToastPrimitive.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 15px;
`;

const StyledDescription = styled(ToastPrimitive.Description)`
  grid-area: description;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;
  line-height: 1.3;
`;

const StyledAction = styled(ToastPrimitive.Action)`
  grid-area: action;
`;

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;
