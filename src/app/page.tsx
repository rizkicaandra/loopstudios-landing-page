import About from '@/components/About';
import Header from '@/components/Header';
import Portofolio from '@/components/Portofolio';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Portofolio />
      <div className='mt-24'></div>
    </>
  );
}
