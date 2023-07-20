import servicesBackgound from '../../../public/images/bg-services-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BackgroundImage from '@/components/BackgroundImage';
import HeroTitle from '@/components/HeroTitle';

export default function Page() {
  return (
    <main>
      <HeroSection src={servicesBackgound} alt="Комбайни в ряд на полі" />
      Its SERVICES page
    </main>
  );
}
