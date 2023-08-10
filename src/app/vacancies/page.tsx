import { useState } from 'react';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import SmallCotainer from '@/components/SmallContainer';
import ResumeForm from '@/components/ResumeForm';
import Notification from '@/components/Notification';

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

const vacancyTitles = [
  {
    _id: '646e0ad36f2c17ba9530988b',
    title: 'Тракторист',
  },
  {
    _id: '646e1584a5f81586b187fad3',
    title: 'Вантажник',
  },
  {
    _id: '646e24bdd16de4047f22ed7c',
    title: 'category',
  },
  {
    _id: '646e24c0d16de4047f22ed7f',
    title: 'category',
  },
  {
    _id: '646e24c1d16de4047f22ed82',
    title: 'test t',
  },
  {
    _id: '646e26961506d339f1d767d4',
    title: 'title test',
  },
  {
    _id: '646e53aa6fed7a18a5edec54',
    title: 'combiner',
  },
  {
    _id: '64773843ee42cb4485d49673',
    title: 'qweqwe',
  },
  {
    _id: '648b052f09888b6dcbf33cb9',
    title: 'test new drop',
  },
  {
    _id: '648b145aa323758a47c08a5a',
    title: 'testt',
  },
  {
    _id: '64a44dad0b8033f180e91ed0',
    title: 'Тракторист',
  },
];

export default async function Page() {
  // const vacancyTitles = await getVacancyTitles();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <main>
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
      {isNotificationOpen && (
        <Notification
          setIsNotificationOpen={setIsNotificationOpen}
          isNotificationOpen={isNotificationOpen}
          status="success"
        />
      )}
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
