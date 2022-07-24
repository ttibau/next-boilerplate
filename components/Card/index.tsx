import * as Styled from './styles';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <Styled.CardContainer>
      <Styled.CardHeader>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardOptions />
      </Styled.CardHeader>
      {children}
    </Styled.CardContainer>
  );
};

export default Card;
