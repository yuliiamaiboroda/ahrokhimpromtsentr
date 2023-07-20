import SectionTitle from '@/components/SectionTitle';
import aboutBackground from '../../../public/images/bg-about-screen.jpg';
import HeroSection from '@/components/HeroSection';

export default function Page() {
  return (
    <main>
      <HeroSection src={aboutBackground} alt="Рука в колосках ячменю" />
      Its ABOUT page
      <SectionTitle title="Наші нагороди" />
    </main>
  );
}
