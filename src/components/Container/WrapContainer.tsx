import React from 'react';
import style from './WrapContainer.module.scss';

interface WrapContainerProps {
  children: React.ReactNode;
}

const WrapContainer: React.FC<WrapContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default WrapContainer;
