import React, { ReactNode } from 'react';
import style from './Header.module.scss';
import Image from 'next/image';
import logo from '@images/logo/logo.png';
import Link from 'next/link';
import MobileMenu from '@/src/components/MobileMenu/MobileMenu';
import { Navigation } from '../Navigation/Navigation';
import { navList } from '@/src/data/navList';
import HeaderContacts from './HeaderContacts';
import Container from '../Container/Container';

interface Props {
  children?: ReactNode;
}

const Header: React.FC<Props> = () => {
  return (
    <header className={`${style.header} container`} id="header">
      <Container className={style.wrap}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className={style.logo}
            sizes="(min-width: 768px) 178px, 89px"
            loading="eager"
          />
        </Link>
        <MobileMenu navList={navList} />
        <Navigation navList={navList} />
        <HeaderContacts />
      </Container>
    </header>
  );
};

export default Header;
