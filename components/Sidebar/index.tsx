import { SidebarContainer } from './styles';
import { MENU_ITEMS } from '../../constants/menu-items';
import MenuItemsList from '../MenuItemsList';
import Image from 'next/image';
import logo from '../../resources/assets/logo.png';
type SidebarProps = {
  isOpened: boolean;
};

export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <Image alt='logo' src={logo} />
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}
