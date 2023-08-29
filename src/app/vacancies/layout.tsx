import HeroSection from '@/components/HeroSection';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import Section from '@/components/Section/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import SmallCotainer from '@/components/SmallContainer';
import Description from '@/components/Description';
import ResumeForm from '@/components/ResumeForm';
import BushUpperDecoration from '@/components/BushUpperDecoration';
import CornDecoration from '@/components/CornDecoration';
import type { Metadata } from 'next';
import { BASE_URL } from '@/helpers/constants';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр | Робота',
  openGraph: {
    title: 'Агрохімпромцентр | Робота',
  },
};

interface IVacancyTitle {
  _id: string;
  title: string;
}

async function getVacancyTitles() {
  const res = await fetch(BASE_URL + '/api/vacancies/titles');

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
      <BushUpperDecoration />
      <CornDecoration />
    </main>
  );
}
