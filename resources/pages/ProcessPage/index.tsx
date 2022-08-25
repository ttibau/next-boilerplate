import { ArrowUpward, Add } from '@styled-icons/material';
import { NextPage } from 'next';
import { useContext } from 'react';
import Badge from '../../../components/Badge';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import { DialogContext } from '../../../components/context/DialogContext';
import Dialog from '../../../components/Dialog';
import ProcessForm from '../../../components/Forms/Process';
import ProcessTable from '../../../components/Tables/Process';
import * as Styled from './styles';

const ProcessPage: NextPage = () => {
  const { openDialog } = useContext(DialogContext);
  return (
    <Styled.Container>
      <Dialog />
      <Styled.Header>
        <Styled.Title>Process</Styled.Title>
        <Button
          onClick={() => {
            openDialog({
              title: 'Create Process',
              content: <ProcessForm />,
            });
          }}
          icon={<Add />}
          label='New Process'
          color='primary'
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
      <Styled.PageContent>
        <ProcessTable />
      </Styled.PageContent>
    </Styled.Container>
  );
};

export default ProcessPage;
