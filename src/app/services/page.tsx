import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ButtonLink from '@/components/ButtonLink';
import Section from '@/components/Section';
import Container from '@/components/Container';
import OfferingsGallery from '@/components/OfferingsGallery';

interface IServiceItem {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt: string;
}

async function getServices() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/services/getAll'
  );

  if (!res.ok) {
    throw new Error('Error fetching services');
  }

  return res.json() as Promise<IServiceItem[]>;
}

export default async function Page() {
  const services = await getServices();
  return (
    <>
      <Section>
        <Container>
          <SectionTitle title="Послуги" />
          <OfferingsGallery offers={services} navigateTo="/services" />
        </Container>
      </Section>
    </>
  );
}
