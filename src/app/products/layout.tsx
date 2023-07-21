import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <HeroSection src={productsBackground} alt="Поле пшениці" />
      {children}
    </main>
  );
}
