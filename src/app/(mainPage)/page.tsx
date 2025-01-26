import Container from '@/src/components/Container/Container';
import Header from '@/src/components/Header/Header';
import Hero from '@/src/components/Hero/Hero';
import style from './Main.module.scss';

export default function MainPage() {
  return (
    <>
      <Container className={style.background_wrap}>
        <Header />
        <Hero />
      </Container>
    </>
  );
}
