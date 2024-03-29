import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';
import Description from '@/components/Description';
import { BASE_URL } from '@/helpers/constants';
import Contacts from '@/components/Contacts';

interface IProductItem {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt: string;
}

async function getCurrentProduct(productId: string) {
  const res = await fetch(`${BASE_URL}/api/products/${productId}`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Error fetching product: ' + productId);
  }

  return res.json() as Promise<IProductItem>;
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getCurrentProduct(params.productId);
  const { title, description, imageURL, price, contactMail, contactPhone } =
    product;

  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <DetailsImage alt={title} src={imageURL} />
        <div
          className="mb-5 flex flex-col items-center gap-3
                        md:mb-10 md:gap-7"
        >
          <Description description={description} />{' '}
          <Description
            description={` Ціна: ${price}${!isNaN(Number(price)) ? '₴' : ''}`}
          />
          <Contacts email={contactMail} phone={contactPhone} />
        </div>
        <div className="mx-auto mt-5 w-fit md:mt-10">
          <ButtonLink
            navigateTo="/products"
            title="Продукти компанії"
            size="l"
          />
        </div>
      </Container>
    </Section>
  );
}
