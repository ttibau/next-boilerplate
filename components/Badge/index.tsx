import * as Styled from './styles';

interface BadgeProps {
  children: React.ReactNode;
  bgColor: string;
  color: string;
}

const Badge = (props: BadgeProps) => {
  return (
    <Styled.BadgeContainer bgColor={props.bgColor} color={props.color}>
      {props.children}
    </Styled.BadgeContainer>
  );
};

export default Badge;
