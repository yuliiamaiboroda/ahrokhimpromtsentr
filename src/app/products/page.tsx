import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import OfferingsGallery from '@/components/OfferingsGallery';
import Description from '@/components/Description';
import { BASE_URL } from '@/helpers/constants';
import data from '../../../public/data/data.json';

interface IProductItem {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

async function getProducts() {
  const res = await fetch(BASE_URL + '/api/products/', {
    cache: 'no-cache',
  });

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
          <SectionTitle title={data['products-page']['products-subtitle']} />
          <Description description={data['products-page'].description} />
          <div className="mt-9 md:mt-12 xl:mt-20">
            <OfferingsGallery offers={products} navigateTo="/products" />
          </div>
        </Container>
      </Section>
    </>
  );
}
