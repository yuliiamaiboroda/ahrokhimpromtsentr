import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';

import Image from 'next/image';

const response = [
  {
    _id: '64b7c5ce5f1214986b67df57',
    title: 'Пшениця',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689765325/products/f1bdf723-ed2a-491a-9454-58728b9ab5ae.jpg',
    description:
      'Надважлива сільськогосподарська культура, яка відноситься до сімейства злакових та є головним продуктом для виготовлення круп, борошна тощо.',
    createdAt: '2023-07-19T11:15:26.306Z',
  },
  {
    _id: '64b7c5eb5f1214986b67df5a',
    title: 'Кукурудза',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689765355/products/60a3a8c6-184b-4dd4-9dad-91215e01a7ae.jpg',
    description:
      'Вважається однією з найголовніших культур людства. Зерновий продукт є універсальним різновидом рослини, який відрізняється високою врожайністю.',
    createdAt: '2023-07-19T11:15:55.630Z',
  },
  {
    _id: '64b7c6045f1214986b67df5d',
    title: 'Соняшник',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689765379/products/2b40fbf6-ff67-4991-a858-f0d021a12061.jpg',
    description:
      'Цінна культура та основний олійний компонент в Україні. Соняшникові продукти користується великим попитом завдяки натуральності та поживним властивостям.',
    createdAt: '2023-07-19T11:16:20.075Z',
  },
  {
    _id: '64b7c6225f1214986b67df60',
    title: 'Соя',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689765409/products/e7aa2cb1-842a-4db2-a61e-f5bcddd8506c.jpg',
    description:
      'Унікальна рослина, що має відношення до бобових культур. Має надкорисні харчові властивості та використовується для виробництва багатьох видів продукції.',
    createdAt: '2023-07-19T11:16:50.211Z',
  },
  {
    _id: '64b7c63e5f1214986b67df63',
    title: 'Гречка',
    imageURL:
      'https://res.cloudinary.com/agrohimpromcenter/image/upload/v1689765438/products/040fc125-137f-42e3-beb8-434f9471bb88.jpg',
    description:
      'Ключова культура круп’яного типу, яка відрізняється невибагливістю вирощування та унікальними поживними якостями. ',
    createdAt: '2023-07-19T11:17:18.746Z',
  },
];

export default function Page() {
  return (
    <main>
      <HeroSection src={productsBackground} alt="Поле пшениці" />
      <section>
        <SectionTitle title="Продукти компанії" />
        <div className="mx-auto max-w-[480px] px-4 md:max-w-[755px] xl:max-w-[810px]">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {response.map(({ _id, title, imageURL }) => (
              <li
                key={_id}
                className="relative overflow-hidden rounded-[13px] border-2 border-solid border-transparent bg-light-gradient shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
              >
                <Image
                  src={imageURL}
                  alt={title}
                  width={350}
                  height={226}
                  className="h-[186px] w-[266px] object-cover md:h-[226px] md:w-[323px] xl:w-[350px]"
                />
                <p className="absolute left-0 top-1/2 w-full -translate-y-1/2 bg-[rgba(47,_64,_48,_0.67)] p-3 text-center font-body text-base font-bold md:p-2 md:text-xl xl:text-2xl">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
