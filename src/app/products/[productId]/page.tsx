import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';
import Description from '@/components/Description';
import { BASE_URL } from '@/helpers/constants';
import emptyImage from '../../../../public/images/empty-image.jpg';

interface IProductItem {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

async function getCurrentProduct(productId: string) {
  const res = await fetch(`${BASE_URL}/api/products/certain/${productId}`);

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
  const { title, description, imageURL } = product;

  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <DetailsImage alt={title} src={imageURL ? imageURL : emptyImage} />
        <Description description={description} />
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
