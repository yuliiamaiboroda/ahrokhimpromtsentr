import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ButtonLink from '@/components/ButtonLink';

interface IServiceItem {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  contactMail: string;
  contactPhone: string;
  createdAt: string;
}

async function getCurrentService(productId: string) {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/services/getAll'
  );

  if (!res.ok) {
    throw new Error('Error fetching services');
  }

  const productsList = (await res.json()) as Promise<IServiceItem[]>;

  const product = (await productsList).find(({ _id }) => _id === productId);

  if (!product) {
    throw new Error('Error fetching current service');
  }

  return product;
}

// TODO: Change links hover style
// TODO: Change access rights on backend for current service (to not Auth)
export default async function Page({
  params,
}: {
  params: { serviceId: string };
}) {
  const product = await getCurrentService(params.serviceId);
  const { title, description, imageURL, price, contactMail, contactPhone } =
    product;

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
        <div className="mb-5 flex flex-col items-center gap-3 text-center font-body text-base font-semibold md:mb-10 md:gap-7 md:text-lg xl:text-xl">
          <p>{description}</p>
          <p>
            Ціна: {price}
            {!isNaN(Number(price)) && '₴'}
          </p>
          <a href={`mailto:${contactMail}`} className="hover:font-bold">
            Пошта:{' '}
            <span className="underline">{contactMail.toLowerCase()}</span>
          </a>
          <a href={`tel:${contactPhone}`} className="hover:font-bold">
            Телефон:{' '}
            <span className="underline">
              {`${contactPhone.slice(0, 3)} (${contactPhone.slice(
                3,
                6
              )}) ${contactPhone.slice(6, 9)}-${contactPhone.slice(
                9,
                11
              )}-${contactPhone.slice(11)}`}
            </span>
          </a>
        </div>
        <div className="mx-auto w-fit">
          <ButtonLink navigateTo="/products" title="Послуги компанії" />
        </div>
      </div>
    </section>
  );
}
