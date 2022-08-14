import * as Styled from './styles';
import Tree, { ReactTreeTheme } from '@naisutech/react-tree';
import OrganizationalTable from '../../../components/Tables/OrganizationalTable';
import Dialog from '../../../components/Dialog';
import DialogButton from '../../../components/DialogButton';
import { Add } from '@styled-icons/material/Add';
import OrganizationalForm from '../../../components/Forms/Organizational';

const OrganizationalChartPage = () => {
  const data = [
    {
      id: '1',
      label: 'Presidência',
      parentId: null,
    },
    {
      id: '2',
      label: 'Direção geral',
      parentId: '1',
    },
    {
      id: '3',
      label: 'Direção de marketing',
      parentId: '2',
    },
    {
      id: '4',
      label: 'Direção de vendas',
      parentId: '2',
    },
    {
      id: '5',
      label: 'Direção de tecnologia',
      parentId: null,
    },
  ];

  const TreeTheme: ReactTreeTheme = {
    text: '#000',
    bg: '#FFF',
    indicator: 'transparent',
    separator: 'transparent',
    icon: '#333',
    selectedBg: '#0070f3',
    selectedText: '#FFF',
    hoverBg: '#eff6ff',
    hoverText: '#000',
    accentBg: '#eff6ff',
    accentText: '#000',
    textSize: 'default',
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Organizational Chart</Styled.Title>
        {/* <Dialog
          title='Add Organizational'
          trigger={<DialogButton icon={<Add />} label='New Organizational' />}
          actionLabel='Add'
          content={<OrganizationalForm />}
          cancel={() => {}}
          cancelLabel='Cancel'
          action={() => {}}
        /> */}
      </Styled.Header>
      <Styled.ChartContainer>
        <Styled.TreeContainer>
          <Tree
            customTheme={{ TreeTheme }}
            theme='TreeTheme'
            animations
            nodes={data}
          />
        </Styled.TreeContainer>
        <OrganizationalTable />
      </Styled.ChartContainer>
    </Styled.Container>
  );
};

export default OrganizationalChartPage;
