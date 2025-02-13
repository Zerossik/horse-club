import Container from '@/src/components/Container/Container';
import Header from '@/src/components/Header/Header';
import Hero from '@/src/components/Hero/Hero';
import style from './Main.module.scss';
import About from '@components/About/About';
import Why_choose_us from '@/src/components/Why-choose-us/Why_choose_us';
import Directions from '@/src/components/Directions/Directions';
import directionsData from '@/src/data/directions';

export default function MainPage() {
  return (
    <>
      <Container className={style.background_wrap}>
        <Header />
        <Hero />
      </Container>
      <About />
      <Why_choose_us />
      <Directions data={directionsData} />
    </>
  );
}
