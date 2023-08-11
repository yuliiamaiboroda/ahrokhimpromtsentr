import { useState } from 'react';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import SmallCotainer from '@/components/SmallContainer';
import ResumeForm from '@/components/ResumeForm';
// import Notification from '@/components/Notification';

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

export default async function Page() {
  const vacancyTitles = await getVacancyTitles();
  // const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <main>
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
      {/* {isNotificationOpen && (
        <Notification
          setIsNotificationOpen={setIsNotificationOpen}
          isNotificationOpen={isNotificationOpen}
          status="success"
        />
      )} */}
      <Section>
        <Container>
          <SectionTitle title="Відгукнутися" />
          <SmallCotainer>
            <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
          </SmallCotainer>
          <ResumeForm vacancies={vacancyTitles} />
        </Container>
      </Section>
    </main>
  );
}
