import {
  faChalkboardUser,
  faUsers,
  faDiagramProject,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type MenuOption = {
  name: string;
  icon: IconProp;
  url: string;
  subItems?: MenuOption[];
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: 'Processos',
    icon: faChalkboardUser,
    url: '/process',
  },
  {
    name: 'Organograma',
    icon: faDiagramProject,
    url: '/organization-chart',
    subItems: [
      {
        name: 'Funcionários',
        icon: faUsers,
        url: '/organization-chart/employees',
      },
    ],
  },
  {
    name: 'Usuários',
    icon: faUser,
    url: '/users',
  },
];

export type MenuItem = {
  name: string;
  icon: IconProp;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
