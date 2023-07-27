import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
// import FeedbackForm from '@/components/FeedbackForm';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';

export default function Page() {
  return (
    <main>
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      <Section>
        <Container>{/* <FeedbackForm /> */}</Container>
      </Section>
    </main>
  );
}
