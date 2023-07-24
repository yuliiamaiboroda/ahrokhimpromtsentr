import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import DetailsImage from '@/components/DetailsImage';
import ButtonLink from '@/components/ButtonLink';

interface IProductItem {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

async function getCurrentProduct(productId: string) {
  const res = await fetch(
    `https://ahrokhimpromtsentr.cyclic.app/api/products/certain/${productId}`
  );

  if (!res.ok) {
    throw new Error('Error fetching products');
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
        <DetailsImage src={imageURL} alt={title} />
        <p
          className="text- mb-5 text-center font-body 
                      text-base font-semibold md:mb-10
                      md:text-lg xl:text-xl"
        >
          {description}
        </p>
        <div className="mx-auto w-fit">
          <ButtonLink navigateTo="/products" title="Продукти компанії" />
        </div>
      </Container>
    </Section>
  );
}
