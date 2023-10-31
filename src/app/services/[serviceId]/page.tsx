import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import { BASE_URL } from '@/helpers/constants';

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

async function getCurrentService(serviceId: string) {
  const res = await fetch(`${BASE_URL}/api/services/${serviceId}`);

  if (!res.ok) {
    throw new Error('Error fetching product: ' + serviceId);
  }

  return res.json() as Promise<IServiceItem>;
}

// TODO: Change links hover style
// TODO: Change access rights on backend for current service (to not Auth)
export default async function Page({
  params,
}: {
  params: { serviceId: string };
}) {
  const service = await getCurrentService(params.serviceId);
  const { title, description, imageURL, price, contactMail, contactPhone } =
    service;

  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <DetailsImage src={imageURL} alt={title} />
        <div
          className="mb-5 flex flex-col items-center gap-3
                        md:mb-10 md:gap-7"
        >
          <Description description={description} />
          <Description
            description={` Ціна: ${price}${!isNaN(Number(price)) ? '₴' : ''}`}
          />
          <Contacts email={contactMail} phone={contactPhone} />
        </div>
        <div className="mx-auto w-fit">
          <ButtonLink
            navigateTo="/services"
            title="Послуги компанії"
            size="l"
          />
        </div>
      </Container>
    </Section>
  );
}
