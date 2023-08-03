'use client';
import Button from '@/components/Button';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import SmallCotainer from '@/components/SmallContainer';
import ResumeForm from '@/components/ResumeForm';

export default function Page() {
  return (
    <main>
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
      its VACANCIES page
      <div className="flex items-center justify-center gap-5">
        <Button
          onClick={() => console.log('click')}
          variant="primary"
          type="button"
          title="Всі вакансіїї"
        />
        <Button
          onClick={() => console.log('click')}
          variant="secondary"
          type="button"
          title="Актуальні вакансії"
        />
      </div>
      <Section>
        <Container>
          <SectionTitle title="Відгукнутися" />
          <SmallCotainer>
            <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
          </SmallCotainer>
          <ResumeForm />
        </Container>
      </Section>
    </main>
  );
}
