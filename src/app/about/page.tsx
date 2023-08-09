import aboutBackground from '../../../public/images/bg-about-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';
import HistorySection from '@/components/HistorySection';
import AwardsSection from '@/components/AwardsSection';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Page() {
  return (
    <main>
      <HeroSection src={aboutBackground} alt="Рука в колосках ячменю" />
      <Container>
        <Section>
          <Description
            description="
Компанія АГРОХІМПРОМЦЕНТР була заснована в 1999 році на території села Горобівка, що знаходиться в Сумській області. В перший період існування підприємство здійснювало обробку земель площею 200 га, а в подальші роки територія постійно збільшувалась. Одним з ключових напрямків діяльності є вирощування зернових культур за допомогою власних потужностей та з урахуванням класичних технологій. Станом на сьогодні компанія займає перше місце у виробництві зерен гречки в Сумській області. 
"
          />
        </Section>
      </Container>
      <Section>
        <HistorySection />
      </Section>
      <Section>
        <AwardsSection />
      </Section>
    </main>
  );
}
