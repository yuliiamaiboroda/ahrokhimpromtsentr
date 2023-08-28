import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import { BASE_URL } from '@/helpers/constants';

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

async function getCurrentService(productId: string) {
  const res = await fetch(BASE_URL + '/api/services/getAll');

  if (!res.ok) {
    throw new Error('Error fetching services');
  }

  const productsList = (await res.json()) as Promise<IServiceItem[]>;

  const product = (await productsList).find(({ _id }) => _id === productId);

  if (!product) {
    throw new Error('Error fetching current service');
  }

  return product;
}

// TODO: Change links hover style
// TODO: Change access rights on backend for current service (to not Auth)
export default async function Page({
  params,
}: {
  params: { serviceId: string };
}) {
  const product = await getCurrentService(params.serviceId);
  const { title, description, imageURL, price, contactMail, contactPhone } =
    product;

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
