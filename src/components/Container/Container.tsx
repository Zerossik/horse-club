import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Container;
