import React from 'react';
import s from './Why_choose_us.module.scss';
import WrapContainer from '../Container/WrapContainer';
import List from '../ui/List/List';
import ListItemLi from '../ui/List/ListItemLi';
import Image from 'next/image';
import auto from '@images/auto.png';
import clock from '@images/clock.jpg';
import map from '@images/map.png';
import table from '@images/table.png';

const Why_choose_us: React.FC = () => {
  return (
    <WrapContainer>
      <section className={s.why_choose_us}>
        <h2 className={s.title}>Почему нас выбирают</h2>
        <List className={s.list}>
          <ListItemLi>
            <Image src={map} alt="карта" className={s.image} />

            <p className={s.sub_title}>Удобное расположение</p>
            <p className={s.desc}>
              Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться
            </p>
          </ListItemLi>
          <ListItemLi>
            <Image src={table} alt="стол" className={s.image} />

            <p className={s.sub_title}>Обеденная зона</p>
            <p className={s.desc}>
              Имеется столовая, чтобы Вы могли перекусить и немного отдохнуть. Бесплатно чай, кофе,
              печенки.
            </p>
          </ListItemLi>
          <ListItemLi>
            <Image src={clock} alt="часы" className={s.image} />

            <p className={s.sub_title}>Профессиональные тренера</p>
            <p className={s.desc}>
              Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших
              учеников
            </p>
          </ListItemLi>
          <ListItemLi>
            <Image src={auto} alt="автомобиль" className={s.image} />

            <p className={s.sub_title}>Бесплатная парковка</p>
            <p className={s.desc}>
              У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой
              автомобиль
            </p>
          </ListItemLi>
        </List>
      </section>
    </WrapContainer>
  );
};

export default Why_choose_us;
