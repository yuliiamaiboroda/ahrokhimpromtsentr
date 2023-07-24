import Image from 'next/image';
import Link from 'next/link';
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

// TODO: Add correct styles for SectionTitle and Section (paddings and margins);

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <section className="pb-16 md:pb-32 xl:pb-40">
        <SectionTitle title="Продукти компанії" />
        <div className="mx-auto mt-9 max-w-[480px] px-4 md:mt-12 md:max-w-[755px] xl:mt-20 xl:max-w-[810px]">
          <OfferingsGallery offers={products} navigateTo="/products" />
        </div>
      </section>
    </>
  );
}
