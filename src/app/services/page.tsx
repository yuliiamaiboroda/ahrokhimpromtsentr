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

async function getServices() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/services/getAll'
  );

  if (!res.ok) {
    throw new Error('Error fetching services');
  }

  return res.json() as Promise<IServiceItem[]>;
}

export default async function Page() {
  const services = await getServices();
  return (
    <>
      <section className="pb-20">
        <SectionTitle title="Послуги" />
        <div className="mx-auto mt-9 max-w-[480px] px-4 md:mt-12 md:max-w-[755px] xl:mt-20 xl:max-w-[810px]">
          <ul className="font-body font-semibold">
            {services.map(({ _id, title, description, imageURL, price }) => (
              <li
                key={_id}
                className="mx-auto mb-9 flex w-full max-w-[266px] flex-col gap-5 last:mb-0 
                          md:mb-16 md:max-w-full md:flex-row md:gap-8 xl:mb-20 xl:gap-10"
              >
                <div
                  className="relative h-[186px] w-full shrink-0 before:absolute before:-bottom-0.5
                                before:-left-0.5 before:-right-0.5 before:-top-0.5
                                before:rounded-xl before:bg-light-gradient md:h-[225px]
                                md:w-[276px] xl:h-[256px] xl:w-[350px]"
                >
                  <Image
                    src={imageURL}
                    alt={title}
                    fill
                    sizes="(min-width: 1280px) 350px, (mi-width: 768px) 276px, 226px"
                    className="rounded-xl object-cover object-center"
                  />
                </div>
                <div className="flex flex-col  ">
                  <h3
                    className="relative mx-auto mb-5 w-fit text-xl before:absolute before:left-0 before:top-full
                                 before:h-1 before:w-full before:rounded-sm before:bg-underline-gradient
                                  md:mx-0 xl:text-2xl"
                  >
                    {title}
                  </h3>
                  <p className="text-center text-base md:text-left md:text-lg xl:text-xl">
                    {description.length <= 130
                      ? description
                      : description.slice(0, 127) + '...'}
                  </p>
                  <div className="mx-auto mt-6 w-fit md:mx-0 md:mt-auto">
                    <ButtonLink
                      navigateTo={`/services/${_id}`}
                      title="Зв‘язатись з нами"
                      size="s"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
