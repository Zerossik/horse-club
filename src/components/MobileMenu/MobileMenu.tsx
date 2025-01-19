'use client';
import { FC, useEffect, useState } from 'react';
import { Button } from '@components/ui/Button/Button';
import style from './MobileMenu.module.scss';
import debounce from 'debounce';
import { AnimatePresence, motion } from 'motion/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import List from '../ui/List/List';
import ListItemLi from '../ui/List/ListItemLi';
import Link from 'next/link';
import { NavigationList } from '@/src/types/interfaces';

interface PropsI {
  navList: NavigationList[];
}

const MobileMenu: FC<PropsI> = ({ navList }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handlerToggleMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  // animation settings object
  const animation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 0.9 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.15, ease: 'linear' },
  };

  useEffect(() => {
    const handlerResize = debounce(() => {
      const documentWidth = document.body.offsetWidth;
      if (documentWidth >= 768) {
        animation.transition.duration = 0;
        setIsOpenMenu(false);
      }
    }, 200);

    if (isOpenMenu) {
      window.addEventListener('resize', handlerResize);
    }
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, [animation.transition, isOpenMenu]);

  return (
    <>
      <Button onClick={handlerToggleMenu} className={style.menu_btn}>
        <GiHamburgerMenu className={style.buttonIcon} />
        Меню
      </Button>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div className={style.navWrap} {...animation}>
            <Button onClick={() => setIsOpenMenu(false)} className={style.closeButton}>
              <IoMdClose className={style.closeButtonIcon} />
            </Button>

            <List className={style.navListMobile}>
              {navList.map(({ id, name, link }) => (
                <ListItemLi key={id} onClick={handlerToggleMenu}>
                  <Link href={link}>{name}</Link>
                </ListItemLi>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
