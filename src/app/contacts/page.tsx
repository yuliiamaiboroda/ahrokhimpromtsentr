import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
import FeedbackForm from '@/components/FeedbackForm';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import SmallCotainer from '@/components/SmallContainer';
import LocationMap from '@/components/LocationMap';

export default function Page() {
  return (
    <main>
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      <Section>
        <Container>
          <SectionTitle title="Контакти" />
          <SmallCotainer>
            <Description description="Покровська площа, 13, Суми, Сумська область, 40030" />
          </SmallCotainer>
          <Contacts phone="+380542225196" email="30452338@ukr.net" />
          <LocationMap />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="Відгукнутися" />
          <SmallCotainer>
            <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
          </SmallCotainer>
          <FeedbackForm />
        </Container>
      </Section>
    </main>
  );
}
