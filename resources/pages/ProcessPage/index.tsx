import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { ArrowUpward, Add } from '@styled-icons/material';
import { NextPage } from 'next';
import Badge from '../../../components/Badge';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import Dialog from '../../../components/Dialog';
import * as Styled from './styles';

const ProcessPage: NextPage = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Process</Styled.Title>
        <Dialog
          title='Add Process'
          triggerLabel='Add Process'
          triggerIcon={<Add />}
          actionLabel='Add'
          content={<span>asdfasd</span>}
          cancel={() => {}}
          cancelLabel='Cancel'
        />
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
