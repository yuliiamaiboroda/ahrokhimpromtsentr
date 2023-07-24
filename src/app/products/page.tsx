import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

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

// TODO: Add correct styles for SectionTitle and Section (paddings and margins), separate Section and Container to different reusable components;

export default async function Page() {
  const data = await getProducts();

  return (
    <>
      <section className="pb-16 md:pb-32 xl:pb-40">
        <SectionTitle title="Продукти компанії" />
        <div className="mx-auto mt-9 max-w-[480px] px-4 md:mt-12 md:max-w-[755px] xl:mt-20 xl:max-w-[810px]">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {data.map(({ _id, title, imageURL }) => (
              <li
                key={_id}
                className="overflow-hidden rounded-[13px] bg-light-gradient p-0.5 shadow-product hover:shadow-hover"
              >
                <Link
                  href={'/products/' + _id}
                  className="relative block h-[186px] w-[266px] overflow-hidden 
                              rounded-[13px] md:h-[226px] md:w-[323px] xl:w-[350px]"
                >
                  <Image
                    src={imageURL}
                    alt={title}
                    fill
                    sizes="(min-width: 1440px) 25vh,  (min-width: 1280px) 33vh,  (min-width: 768px) 50vh,  100vh"
                    className="object-cover"
                  />
                  <p
                    className="absolute left-0 top-1/2 w-full -translate-y-1/2 bg-[rgba(47,_64,_48,_0.67)] p-3 
                                text-center font-body text-base font-bold md:p-2 md:text-xl xl:text-2xl"
                  >
                    {title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
