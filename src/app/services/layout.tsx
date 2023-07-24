import servicesBackgound from '../../../public/images/bg-services-screen.jpg';
import HeroSection from '@/components/HeroSection';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <HeroSection src={servicesBackgound} alt="Комбайни в ряд на полі" />
      {children}
    </main>
  );
}
