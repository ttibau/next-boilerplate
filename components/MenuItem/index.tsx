import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItem as MenuItemType } from '../../constants/menu-items';
import { MenuItemContainer } from './styles';
import MenuItemsList from '../MenuItemsList';
import ExpandIcon from '../ExpandIcon';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon, url, depth, subItems },
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(false);

  const router = useRouter();
  const selected = router.asPath === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer className={selected ? 'selected' : ''} depth={depth}>
        <Link href={url} passHref>
          <div className='menu-item'>
            <FontAwesomeIcon icon={icon} />
            <span>{name}</span>
          </div>
        </Link>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  );
}
