import * as Styled from './styles';

interface IButtonProps {
  icon?: JSX.Element;
  label?: string;
  color?: string;
  onClick?: () => void;
}

const DialogButton = ({ icon, label, color }: IButtonProps) => {
  return (
    <Styled.Button color={color}>
      {icon ? <Styled.Icon>{icon}</Styled.Icon> : null}
      <span>{label}</span>
    </Styled.Button>
  );
};

export default DialogButton;
