import aboutBackground from '../../../public/images/bg-about-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';
import HistorySection from '@/components/HistorySection';
import AwardsSection from '@/components/AwardsSection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CornDecoration from '@/components/CornDecoration';

import data from '../../../public/data/data.json';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={aboutBackground} alt="Рука в колосках ячменю" />
      <Container>
        <Section>
          <Description
            description={data['about-page']['page-description-first']}
          />
          <Description
            description={data['about-page']['page-description-second']}
          />
          <Description
            description={data['about-page']['page-description-third']}
          />
        </Section>
      </Container>
      <Section>
        <HistorySection />
      </Section>
      <Section>
        <AwardsSection />
      </Section>
      <CornDecoration />
    </main>
  );
}
