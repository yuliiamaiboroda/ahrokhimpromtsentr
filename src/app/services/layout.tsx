import servicesBackgound from '../../../public/images/bg-services-screen.jpg';
import HeroSection from '@/components/HeroSection';
import CornDecoration from '@/components/CornDecoration';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={servicesBackgound} alt="Комбайни в ряд на полі" />
      {children}
      <CornDecoration />
    </main>
  );
}
