import { FC, HTMLAttributes, ReactNode } from 'react';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

const List: FC<ListProps> = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

export default List;
