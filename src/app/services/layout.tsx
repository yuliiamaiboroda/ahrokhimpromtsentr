import servicesBackgound from '../../../public/images/bg-services-screen.jpg';
import HeroSection from '@/components/HeroSection';
import CornDecoration from '@/components/CornDecoration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр | Послуги компанії',
  description:
    'Підприємство надає комплекс послуг для аграріїв, котрим необхідно здійснити оброблення земель чи транспортування, збір та зберігання врожаю.',
  openGraph: {
    title: 'Агрохімпромцентр | Послуги компанії',
    description:
      'Підприємство надає комплекс послуг для аграріїв, котрим необхідно здійснити оброблення земель чи транспортування, збір та зберігання врожаю.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={servicesBackgound} alt="Комбайни в ряд на полі" />
      {children}
      <CornDecoration />
    </main>
  );
}
