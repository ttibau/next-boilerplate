import * as Styled from './styles';

interface TooltipProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  children: React.ReactNode;
  trigger: JSX.Element;
}

const TooltipComponent = ({
  variant = 'primary',
  children,
  trigger,
}: TooltipProps) => {
  return (
    <Styled.Provider>
      <Styled.Tooltip>
        <Styled.TooltipTrigger>{trigger}</Styled.TooltipTrigger>
        <Styled.TooltipContent variant={variant}>
          {children}
        </Styled.TooltipContent>
      </Styled.Tooltip>
    </Styled.Provider>
  );
};

export default TooltipComponent;
