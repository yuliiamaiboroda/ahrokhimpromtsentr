import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import OfferingsGallery from '@/components/OfferingsGallery';
import Description from '@/components/Description';
import { BASE_URL } from '@/helpers/constants';

interface IProductItem {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

async function getProducts() {
  try {
    const res = await fetch(BASE_URL + '/api/products/all');

    console.log('BASE_URL', BASE_URL);

    if (!res.ok) {
      throw new Error('Error fetching products');
    }

    return res.json() as Promise<IProductItem[]>;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <Section>
        <Container>
          <SectionTitle title="Продукція компанії" />
          <Description description="Агрохімпромцентр пропонує дізнатись про ключові продукти, які вирощуються, обробляються, зберігаються на власних потужностях. Підприємство пропонує до реалізації наступні культури: " />
          <div className="mt-9 md:mt-12 xl:mt-20">
            <OfferingsGallery offers={products} navigateTo="/products" />
          </div>
        </Container>
      </Section>
    </>
  );
}
