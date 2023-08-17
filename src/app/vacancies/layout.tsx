import HeroSection from '@/components/HeroSection';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import Section from '@/components/Section/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import SmallCotainer from '@/components/SmallContainer';
import Description from '@/components/Description';
import ResumeForm from '@/components/ResumeForm';
import BackgroundImage from '@/components/BackgroundImage';
import bushLeft from '../../../public/images/left-bottom-image@3x.png';

interface IVacancyTitle {
  _id: string;
  title: string;
}

async function getVacancyTitles() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/vacancies/titles'
  );

  if (!res.ok) {
    throw new Error('Error fetching vacancies titles');
  }

  return res.json() as Promise<IVacancyTitle[]>;
}

interface IProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: IProps) {
  const vacancyTitles = await getVacancyTitles();

  return (
    <main className="relative overflow-hidden">
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
      {children}
      <div id="resumeform">
        <Section>
          <Container>
            <SectionTitle title="Відгукнутися" />
            <SmallCotainer>
              <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
            </SmallCotainer>
            <ResumeForm vacancies={vacancyTitles} />
          </Container>
        </Section>
      </div>
      <div
        className="absolute -bottom-[86px] -left-[118px] -z-10 h-[400px] w-[240px] 
                  md:-bottom-[179px] md:-left-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-left-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
      <div
        className="absolute -bottom-[86px] -right-[118px] -z-10 h-[400px] w-[240px] -scale-x-100
                  md:-bottom-[179px] md:-right-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-right-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
    </main>
  );
}
