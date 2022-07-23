import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import * as Styled from './styles';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Styled.Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Styled.Content>
        <Sidebar isOpened={isOpened} />
        <Styled.PageContainer>{children}</Styled.PageContainer>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  );
}
