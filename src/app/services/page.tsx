import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import OfferingsGallery from '@/components/OfferingsGallery';
import Description from '@/components/Description';
import { BASE_URL } from '@/helpers/constants';
import data from '../../../public/data/data.json';

interface IServiceItem {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt: string;
}

async function getServices() {
  const res = await fetch(BASE_URL + '/api/services/', {
    cache: 'no-cache',
  });

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
          <SectionTitle title={data['services-page']['services-subtitle']} />
          <Description description={data['services-page'].description} />
          <div className="mt-9 md:mt-12 xl:mt-20">
            <OfferingsGallery offers={services} navigateTo="/services" />
          </div>
        </Container>
      </Section>
    </>
  );
}
