import React from 'react';
import style from './About.module.scss';
import image from '@images/horse_In_Jump.jpg';
import List from '../ui/List/List';
import ListItemLi from '../ui/List/ListItemLi';
import WrapContainer from '../Container/WrapContainer';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <WrapContainer>
      <section className={style.about}>
        <h2 className={style.about_title}>О нашем клубе</h2>
        <div className={style.stats_wrap}>
          <Image
            src={image}
            alt="Лошадь в прижке"
            className={style.image}
            sizes="(max-width: 1024px) 320px, 666px"
          />

          <List className={style.about_list}>
            <ListItemLi>
              <p className={style.about_stats}>1100+</p>
              <p className={style.about_stats_desc}>
                Довольный посетителей <span>за последний год</span>
              </p>
            </ListItemLi>
            <ListItemLi>
              <p className={style.about_stats}>50+</p>
              <p className={style.about_stats_desc}>
                Проведенных мероприятий <span>за 6 месяцев</span>
              </p>
            </ListItemLi>
            <ListItemLi>
              <p className={style.about_stats}>20+</p>
              <p className={style.about_stats_desc}>
                Выпущенных профессиональных <span>спортсменов за 1 год</span>
              </p>
            </ListItemLi>
            <ListItemLi>
              <p className={style.about_stats}>15+</p>
              <p className={style.about_stats_desc}>
                Регулярный занятий в неделю <span>с профессиональными наставниками</span>
              </p>
            </ListItemLi>
          </List>

          <p className={style.about_text}>
            Занятия проводятся индивидуально и в группах, стоимость также будет зависеть от ваших
            навыков и умений. Более выгодные условия предусмотрены для регулярных занятий
            при покупке абонементов. Для тех, кто хочет отточить своё мастерство, разработаны
            программы по специализации (конкур, выездка и другие), участие в соревнованиях
            и чемпионатах. Для самых маленьких любителей лошадей действуют пони-клубы, где ребята
            учатся ухаживать за животными и ездить на милых и добрых пони.
          </p>
        </div>
      </section>
    </WrapContainer>
  );
};

export default About;
