import Image from 'next/image';
import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BackgroundImage from '@/components/BackgroundImage';
import HeroTitle from '@/components/HeroTitle';

export default function Page() {
  return (
    <main>
      <HeroSection>
        <BackgroundImage src={productsBackground} alt="Поле пшениці" />
        <HeroTitle>Продукти компанії</HeroTitle>
      </HeroSection>
    </main>
  );
}
