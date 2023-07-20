import AdvantagesSection from '@/components/AdvantagesSection';
import MainHero from '@/components/MainHero';

export default function Home() {
  return (
    <div className="px-4 py-2">
      <MainHero />
      <AdvantagesSection />
    </div>
  );
}
