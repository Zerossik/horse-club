import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export const Button: FC<ButtonI> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
