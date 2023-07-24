import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import OfferingsGallery from '@/components/OfferingsGallery';

interface IProductItem {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

async function getProducts() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/products/all'
  );

  if (!res.ok) {
    throw new Error('Error fetching products');
  }

  return res.json() as Promise<IProductItem[]>;
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Section>
        <Container>
          <SectionTitle title="Продукти компанії" />
          <OfferingsGallery offers={products} navigateTo="/products" />
        </Container>
      </Section>
    </>
  );
}
