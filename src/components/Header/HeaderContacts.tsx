import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import style from './Header.module.scss';

const HeaderContacts: React.FC = () => {
  return (
    <div className={style.headerContacts}>
      <a href="tel:+380000000000">
        <BsTelephoneFill className={style.headerContactSIcon} />
        +380(95)-000-000-0
      </a>
      <p>Ежедневно 9:00 – 22:00</p>
    </div>
  );
};

export default HeaderContacts;
