import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
import FeedbackForm from '@/components/FeedbackForm';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import SmallCotainer from '@/components/SmallContainer';
import LocationMap from '@/components/LocationMap';
import BushDecoration from '@/components/BushDecoration';
import data from '../../../public/data/data.json';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      <Section>
        <Container>
          <SectionTitle title={data['contact-page']['subtitle-first']} />
          <SmallCotainer>
            <div className="flex flex-col gap-5">
              <Description
                description={data['contact-page']['description-first']}
              />
              <Description
                description={data['contact-page']['description-second']}
              />
            </div>
          </SmallCotainer>
          <Contacts phone="+380542225196" email="30452338@ukr.net" />
          <LocationMap />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title={data['contact-page']['subtitle-second']} />
          <SmallCotainer>
            <Description
              description={data['contact-page']['description-third']}
            />
          </SmallCotainer>
          <FeedbackForm />
        </Container>
      </Section>
      <BushDecoration />
    </main>
  );
}
