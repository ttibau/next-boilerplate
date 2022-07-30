import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { ArrowUpward, Add } from '@styled-icons/material';
import { NextPage } from 'next';
import Badge from '../../../components/Badge';
import Card from '../../../components/Card';
import Dialog from '../../../components/Dialog';
import ProcessTable from '../../../components/Tables/Process';
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
          content={
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu volutpat sem, id viverra elit. Duis eget suscipit
              lorem. Fusce efficitur, lacus quis pulvinar aliquam, nisl risus
              blandit risus, at pellentesque mi augue eu dui. Nulla maximus
              fermentum elit nec semper. Donec at commodo arcu. Praesent tempus
              ultricies leo, a lobortis enim malesuada sed. In nibh ligula,
              ullamcorper a nunc lobortis, facilisis sagittis velit.
            </span>
          }
          cancel={() => {}}
          cancelLabel='Cancel'
          action={() => {}}
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
      <Styled.PageContent></Styled.PageContent>
    </Styled.Container>
  );
};

export default ProcessPage;
