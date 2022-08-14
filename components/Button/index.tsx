import * as Styled from './styles';

interface IButtonProps {
  icon?: JSX.Element;
  label?: string;
  color?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ icon, label, color, onClick, type }: IButtonProps) => {
  return (
    <Styled.Button type={type} onClick={onClick} color={color}>
      {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
      <span>{label}</span>
    </Styled.Button>
  );
};

export default Button;
