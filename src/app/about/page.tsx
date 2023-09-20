import aboutBackground from '../../../public/images/bg-about-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Description from '@/components/Description';
import HistorySection from '@/components/HistorySection';
import AwardsSection from '@/components/AwardsSection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CornDecoration from '@/components/CornDecoration';

export default function Page() {
  // весь текст перенесите в 1 json файл, который будет выглядеть как огромный обьект типо такого
  // {
  // page1: {
  //   title: 'title',
  //   pisya: 'pisya',
  //   popa: 'popa
  // },
  // page2: {
  //   title: 'title',
  //   pisya: 'pisya',
  //   popa: 'popa
  // },
  // ...
  //}
  // так весь текст будет в одном месте и его будет проще менеджментить, будет возможность реализовать перевод
  // и компоненты будут чище, потому что вместо кучи текста у вас будет <p>{data.page1.title}</p>
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={aboutBackground} alt="Рука в колосках ячменю" />
      <Container>
        <Section>
          <Description
            description="
Компанія АГРОХІМПРОМЦЕНТР була заснована в 1999 році на території села Горобівка, що знаходиться в Сумській області. В перший період існування підприємство здійснювало обробку земель площею 200 га, а в подальші роки територія постійно збільшувалась. Одним з ключових напрямків діяльності є вирощування зернових культур за допомогою власних потужностей та з урахуванням класичних технологій. Станом на сьогодні компанія займає перше місце у виробництві зерен гречки в Сумській області.
"
          />
          <Description description="Засновником підприємства є Поляков Григорій Михайлович – заслужений працівник сільського господарства України. Григорій Михайлович отримав відзнаку від Президента України (указ №27 від 22 січня 2015 року) за значний особистий внесок у державне будівництво, соціально-економічний, науково-технічний культурно-освітній розвиток Української держави, багаторічну сумлінну працю та високий професіоналізм." />
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
