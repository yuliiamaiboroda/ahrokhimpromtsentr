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
        className="mx-auto mt-9 max-w-[480px] px-4 
                  md:mt-12 md:max-w-[755px] 
                  xl:mt-20 xl:max-w-[810px]"
      >
        <div
          className="relative mx-auto mb-5 h-[200px] w-full max-w-[300px] before:absolute 
                       before:-bottom-0.5 before:-left-0.5
                       before:-right-0.5 before:-top-0.5 before:rounded-2xl 
                       before:bg-light-gradient before:shadow-product
                       md:mb-10 md:h-[300px] md:max-w-[400px]"
        >
          <Image
            src={imageURL}
            alt={title}
            fill
            sizes="(min-widht: 480px) 400px, 300px"
            className="rounded-2xl object-cover object-center"
          />
        </div>
        <p className="text- mb-5 text-center font-body text-base font-semibold md:mb-10 md:text-lg xl:text-xl">
          {description}
        </p>
        <div className="mx-auto w-fit">
          <ButtonLink navigateTo="/products" title="Продукти компанії" />
        </div>
      </div>
    </section>
  );
}
