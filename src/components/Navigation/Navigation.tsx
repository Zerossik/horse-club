import { NavigationList } from '@/src/types/interfaces';
import { FC } from 'react';
import List from '../ui/List/List';
import ListItemLi from '../ui/List/ListItemLi';
import Link from 'next/link';
import style from './Navigation.module.scss';

interface NavigationProps {
  navList: NavigationList[];
}

export const Navigation: FC<NavigationProps> = ({ navList }) => {
  return (
    <nav className={style.nav}>
      <List className={style.navList}>
        {navList.map(({ id, name, link }) => (
          <ListItemLi key={id}>
            <Link href={link} className={style.navLink}>
              {name}
            </Link>
          </ListItemLi>
        ))}
      </List>
    </nav>
  );
};
