import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';

export default function Page() {
  return (
    <main>
      <HeroSection src={productsBackground} alt="Поле пшениці" />
    </main>
  );
}
