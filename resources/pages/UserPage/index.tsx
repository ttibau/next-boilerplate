import { Add } from '@styled-icons/material';
import { NextPage } from 'next';
import { useContext } from 'react';
import Button from '../../../components/Button';
import { DialogContext } from '../../../components/context/DialogContext';
import Dialog from '../../../components/Dialog';
import UserForm from '../../../components/Forms/User';
import UserTable from '../../../components/Tables/User';
import ToastComponent from '../../../components/Toast';
import * as Styled from './styles';

const UserPage: NextPage = () => {
  const { openDialog } = useContext(DialogContext);
  return (
    <Styled.Container>
      <Dialog />
      <ToastComponent variant='success' />
      <Styled.Header>
        <Styled.Title>Users</Styled.Title>
        <Button
          onClick={() => {
            openDialog({
              title: 'Create New User',
              content: <UserForm />,
            });
          }}
          icon={<Add />}
          label='New User'
          color='primary'
        />
      </Styled.Header>
      <Styled.PageContent>
        <UserTable />
      </Styled.PageContent>
    </Styled.Container>
  );
};

export default UserPage;
