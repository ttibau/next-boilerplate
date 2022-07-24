import { ArrowUpward } from '@styled-icons/material';
import { NextPage } from 'next';
import Badge from '../../../components/Badge';
import Card from '../../../components/Card';
import * as Styled from './styles';
const ProcessPage: NextPage = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Process</Styled.Title>
      </Styled.Header>
      <Styled.CardContainer>
        <Card title='Total process'>
          <Styled.CardContent>
            <Styled.CardCounter>7.126</Styled.CardCounter>
            <Badge bgColor='#ECFDF3' color='#027A48'>
              <ArrowUpward />
              20%
            </Badge>
          </Styled.CardContent>
        </Card>
        <Card title='Total process'>
          <Styled.CardContent>
            <Styled.CardCounter>7.126</Styled.CardCounter>
            <Badge bgColor='#ECFDF3' color='#027A48'>
              <ArrowUpward />
              20%
            </Badge>
          </Styled.CardContent>
        </Card>
        <Card title='Total process'>
          <Styled.CardContent>
            <Styled.CardCounter>7.126</Styled.CardCounter>
            <Badge bgColor='#ECFDF3' color='#027A48'>
              <ArrowUpward />
              20%
            </Badge>
          </Styled.CardContent>
        </Card>
      </Styled.CardContainer>
    </Styled.Container>
  );
};

export default ProcessPage;
