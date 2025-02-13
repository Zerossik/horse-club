import React from 'react';
import WrapContainer from '../Container/WrapContainer';
import ListItemLi from '../ui/List/ListItemLi';
import List from '../ui/List/List';
import s from './Directions.module.scss';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';
import Container from '../Container/Container';

interface DirectionsProps {
  data: { photo: string; title: string; description: string }[];
}

const Directions: React.FC<DirectionsProps> = ({ data }) => {
  return (
    <Container className={s.wrap_bg}>
      <WrapContainer>
        <section className={s.directions}>
          <h2 className={s.title}>Направления клуба</h2>
          <List className={s.directions_list}>
            {data.map(({ photo, title, description }, index) => (
              <ListItemLi key={index} className={s.directions_item}>
                <Image
                  src={photo}
                  alt="title"
                  className={s.image}
                  width={320}
                  height={220}
                  loading="lazy"
                />
                <h3 className={s.sub_title}>{title}</h3>
                <p className={s.description}>{description}</p>
              </ListItemLi>
            ))}
          </List>
          <Button type="button" className={s.heroButton}>
            записаться
          </Button>
        </section>
      </WrapContainer>
    </Container>
  );
};

export default Directions;
