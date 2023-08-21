import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import OfferingsGallery from '@/components/OfferingsGallery';
import Description from '@/components/Description';

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
          <Description description="Підприємство надає комплекс послуг для аграріїв, котрим необхідно здійснити оброблення земель чи транспортування, збір та зберігання врожаю. " />
          <div className="mt-9 md:mt-12 xl:mt-20">
            <OfferingsGallery offers={services} navigateTo="/services" />
          </div>
        </Container>
      </Section>
    </>
  );
}
