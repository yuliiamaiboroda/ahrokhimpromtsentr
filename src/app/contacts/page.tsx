import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
import FeedbackForm from '@/components/FeedbackForm';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';

export default function Page() {
  return (
    <main>
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      <Section>
        <Container>
          <SectionTitle title="Відгукнутися" />
          <div className="mx-auto w-4/5 md:w-1/2">
            <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
          </div>
          <FeedbackForm />
        </Container>
      </Section>
    </main>
  );
}
