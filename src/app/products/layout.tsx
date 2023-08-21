import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BushDecoration from '@/components/BushDecoration';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={productsBackground} alt="Поле пшениці" />
      {children}
      <BushDecoration />
    </main>
  );
}
