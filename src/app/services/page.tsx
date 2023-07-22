const services = [
  {
    _id: '648b0b41d09d679d4a52244d',
    title: 'Комбайнчик',
    description: 'Опис відсутній',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1686833985/services/19b9b4cf-ee32-4f8d-86ec-5ae4c7d88549.jpg',
    price: '5000',
    contactMail: 'example@mail.com',
    contactPhone: '+380682223344',
    createdAt: '2023-06-15T12:59:45.660Z',
  },
  {
    _id: '64a35b21f692787a00efb4ed',
    title: 'Teste service',
    description:
      'Descr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of ServDescr of Serv',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1688427297/services/e0be0895-60b0-4dec-b64f-3a04d2a39af5.jpg',
    price: '5000',
    contactMail: 'example@mail.com',
    contactPhone: '+380682223344',
    createdAt: '2023-07-03T23:34:57.533Z',
  },
  {
    _id: '64a3f0a61986783ebe329da8',
    title: 'зерно',
    description: 'зерно',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1688465573/services/ee9694fe-0dab-4e6b-bcd0-d16ab83f40ca.jpg',
    price: 'уточнюйте',
    contactMail: 'test@mail.com',
    contactPhone: '+380503561436',
    createdAt: '2023-07-04T10:12:54.559Z',
  },
  {
    _id: '64ab11ee3db9bb90cec37e21',
    title: 'Title',
    description: 'Description',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1688932846/services/726f3d5e-91ee-4404-87e3-6edf66fd606c.png',
    price: '7777',
    contactMail: 'hello@mail.com',
    contactPhone: '+380777777777',
    createdAt: '2023-07-09T20:00:46.617Z',
  },
  {
    _id: '64b1ac2a08a8e6f9610e3bdb',
    title: 'Title',
    description: 'Description',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689365546/services/d41b12af-fd86-4b6e-a9d2-f22fc15734cc.jpg',
    price: '3333',
    contactMail: 'hello@mail.com',
    contactPhone: '+380777777778',
    createdAt: '2023-07-14T20:12:26.821Z',
  },
];

import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ButtonLink from '@/components/ButtonLink';

export default function Page() {
  return (
    <>
      <section className="pb-20">
        <SectionTitle title="Послуги" />
        <div className="mx-auto mt-9 max-w-[480px] px-4 md:mt-12 md:max-w-[755px] xl:mt-20 xl:max-w-[810px]">
          <ul className="flex flex-col items-center gap-9 font-body font-semibold md:gap-16">
            {services.map(({ _id, title, description, imageURL, price }) => (
              <li
                key={_id}
                className="flex w-full max-w-[266px] flex-wrap items-center justify-center gap-5 md:w-full md:max-w-full md:gap-8"
              >
                <div
                  className="relative h-[186px] w-full before:absolute before:-bottom-0.5
                                before:-left-0.5 before:-right-0.5 before:-top-0.5
                                before:rounded-xl before:bg-light-gradient md:h-[225px]
                                md:w-[276px]"
                >
                  <Image
                    src={imageURL}
                    alt={title}
                    fill
                    sizes="100vh"
                    className="rounded-xl object-cover object-center"
                  />
                </div>
                <div className="flex w-full flex-col items-center gap-5 md:w-1/2 md:items-start">
                  <h3
                    className="relative block text-2xl before:absolute
                                 before:left-0 before:top-full before:h-1 before:w-full
                                  before:rounded-sm before:bg-underline-gradient"
                  >
                    {title}
                  </h3>
                  <p className="text-center text-base md:text-left md:text-lg">
                    {description}
                  </p>
                  <p className="text-center text-base md:text-left md:text-lg">
                    Ціна: {price}
                    {!isNaN(Number(price)) && <span>&#8372;</span>}
                  </p>
                  <ButtonLink
                    navigateTo={`/services/${_id}`}
                    title="Зв‘язатись з нами"
                    size="s"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
