import React, { HTMLAttributes, ReactNode } from 'react';

interface ListItemLiProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

const ListItemLi: React.FC<ListItemLiProps> = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

export default ListItemLi;
