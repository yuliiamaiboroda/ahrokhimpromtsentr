import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
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
    <section className="pb-16 md:pb-32 xl:pb-40">
      <SectionTitle title={title} />
      <div
        className="mx-auto mt-9 flex max-w-[480px] flex-col items-center 
                      justify-center gap-9 px-4 md:mt-12 md:max-w-[755px]
                      xl:mt-20 xl:max-w-[810px]"
      >
        <div className="rounded-2xl bg-light-gradient p-0.5 shadow-product">
          <Image
            src={imageURL}
            alt={title}
            width={400}
            height={300}
            className="h-auto max-w-[400px] rounded-2xl"
          />
        </div>
        <Description description={description} />
        <ButtonLink navigateTo="/products" title="Продукти компанії" />
      </div>
    </section>
  );
}
