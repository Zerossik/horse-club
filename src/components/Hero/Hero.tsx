'use client';
import React, { useState } from 'react';
import style from './Hero.module.scss';
import { Button } from '../ui/Button/Button';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
// import Image from 'next/image';
// import mobile from '@images/hero_bg/mobile.jpg';
// import desktop from '@images/hero_bg/desktop.jpg';
interface HeroProps {
  title?: string;
}

const Hero: React.FC<HeroProps> = () => {
  const [isOpenModal, setIsOpenmodal] = useState<boolean>(false);
  const isOpenModalHandler = () => setIsOpenmodal(!isOpenModal);

  return (
    <section className={`${style.hero} container`}>
      <Container className={style.heroContentWrap}>
        <h1 className={style.heroTitle}>
          <span>Окунитесь в мир</span> лошадей вместе с нами
        </h1>
        <p className={style.heroDescription}>
          <span>
            Уроки верховой езды, фотосессии и мероприятия
            <span /> в частном конном клубе <b>&quot;Максимус&quot;</b>.
          </span>
        </p>
        <Button type="button" className={style.heroButton} onClick={isOpenModalHandler}>
          записаться
        </Button>
      </Container>

      {isOpenModal && (
        <Modal>
          <></>
        </Modal>
      )}
    </section>
  );
};

export default Hero;
