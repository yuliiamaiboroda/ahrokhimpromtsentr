import AdvantagesSection from '@/components/AdvantagesSection';
import MainHero from '@/components/MainHero';
import BushDecoration from '@/components/BushDecoration/BushDecoration';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MainHero />
      <AdvantagesSection />
      <BushDecoration />
    </main>
  );
}
