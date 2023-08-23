import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BushDecoration from '@/components/BushDecoration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр | Продукти компанії',
  description:
    'АГРОХІМПРОМЦЕНТР пропонує дізнатись про ключові продукти, які вирощуються,обробляються, зберігаються на власних потужностях ',
  openGraph: {
    title: 'Агрохімпромцентр | Продукти компанії',
    description:
      'АГРОХІМПРОМЦЕНТР пропонує дізнатись про ключові продукти, які вирощуються,обробляються, зберігаються на власних потужностях ',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={productsBackground} alt="Поле пшениці" />
      {children}
      <BushDecoration />
    </main>
  );
}
