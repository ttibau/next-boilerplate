import styled, { keyframes, css } from 'styled-components';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

interface TooltipProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
}

const variantOptions = {
  primary: {
    backgroundColor: '#0070f3',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#f3f3f3',
    color: '#000',
  },
  success: {
    backgroundColor: '#0070f3',
    color: '#fff',
  },
  danger: {
    backgroundColor: '#c0392b',
    color: '#FFF',
  },
};

const StyledContent = styled(TooltipPrimitive.Content)<TooltipProps>`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      color: ${variantOptions[variant].color};
    `};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state='delayed-open'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-state='delayed-close'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-state='delayed-open-right'] {
      animation-name: ${slideRightAndFade};
    }
    &[data-state='delayed-open-left'] {
      animation-name: ${slideLeftAndFade};
    }
  }
`;

const StyledArrow = styled(TooltipPrimitive.Arrow)`
  fill: 'white';
`;

export interface TooltipContentProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
}

function Content({ children, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </TooltipPrimitive.Portal>
  );
}

const TooltipTriggerContent = styled(TooltipPrimitive.Trigger)`
  user-select: none;
  background-color: transparent;
  border: none;
`;

export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipTriggerContent;
export const TooltipContent = Content;
