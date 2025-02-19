import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

interface Props {
  children: Readonly<ReactNode>;
}
export const metadata: Metadata = {
  title: 'Horse-club',
  description:
    'Наш конный клуб – это уникальное место, где гармония с природой встречается с профессиональным обучением верховой езде. ',
};

const MainPageLayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
export default MainPageLayout;
