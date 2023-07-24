import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';
import Description from '@/components/Description';
import ContactLink from '@/components/ContactLink';

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
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/services/getAll'
  );

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
            description={` Ціна: ${price}${!isNaN(Number(price)) && '₴'}`}
          />
          <div className="flex w-full flex-wrap items-center justify-center gap-8">
            <ContactLink href={`mailto:${contactMail}`}>
              {contactMail.toLowerCase()}
            </ContactLink>
            <ContactLink href={`tel:${contactPhone}`}>
              {`${contactPhone.slice(0, 3)} (${contactPhone.slice(
                3,
                6
              )}) ${contactPhone.slice(6, 9)}-${contactPhone.slice(
                9,
                11
              )}-${contactPhone.slice(11)}`}
            </ContactLink>
          </div>
        </div>
        <div className="mx-auto w-fit">
          <ButtonLink navigateTo="/services" title="Послуги компанії" />
        </div>
      </Container>
    </Section>
  );
}
