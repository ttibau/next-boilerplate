import * as Styled from './styles';

interface IButtonProps {
  icon?: JSX.Element;
  label?: string;
  color?: string;
}

const Button = ({ icon, label, color }: IButtonProps) => {
  return (
    <Styled.Button color={color}>
      {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
      <>{label}</>
    </Styled.Button>
  );
};

export default Button;
