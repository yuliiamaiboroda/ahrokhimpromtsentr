import aboutBackground from '../../../public/images/bg-about-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';
import HistorySection from '@/components/HistorySection';
import AwardsSection from '@/components/AwardsSection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CornDecoration from '@/components/CornDecoration';
import data from '../../../public/data/data.json';
import { IsClientCtxProvider } from '@/components/IsClient';

export default function Page() {
  return (
    <IsClientCtxProvider>
      <main className="relative overflow-hidden">
        <HeroSection src={aboutBackground} alt="Рука в колосках ячменю" />
        <Container>
          <Section>
            <div className="flex flex-col gap-5">
              <Description
                description={data['about-page']['description-first']}
              />
              <Description
                description={data['about-page']['description-second']}
              />
              <Description
                description={data['about-page']['description-third']}
              />
            </div>
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
    </IsClientCtxProvider>
  );
}
