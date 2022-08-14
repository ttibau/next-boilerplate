import * as Styled from './styles';

interface IButtonProps {
  icon?: JSX.Element;
  label?: string;
  color?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  outline?: boolean;
}

const Button = ({
  icon,
  label,
  color,
  onClick,
  type,
  outline,
}: IButtonProps) => {
  return (
    <Styled.Button
      outline={outline}
      type={type}
      onClick={onClick}
      color={color}
    >
      {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
      <span>{label}</span>
    </Styled.Button>
  );
};

export default Button;
