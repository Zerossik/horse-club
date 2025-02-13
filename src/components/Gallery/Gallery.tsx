import React from 'react';
import WrapContainer from '../Container/WrapContainer';
import s from './Gallery.module.scss';
import List from '../ui/List/List';
import ListItemLi from '../ui/List/ListItemLi';

interface PropsI {
  data: { path: string }[];
}
const Gallery: React.FC<PropsI> = ({ data }) => {
  return (
    <WrapContainer>
      <section className={s.gallery}>
        <h2 className={s.gallery_title}></h2>
        <List>
          {data.map(el => (
            <ListItemLi key={el.path}>{el.path}</ListItemLi>
          ))}
        </List>
      </section>
    </WrapContainer>
  );
};

export default Gallery;
