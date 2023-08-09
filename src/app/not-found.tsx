'use client';

import Image from 'next/image';
import BrokenTractor from '../../public/images/brokenTractor.svg';
import ButtonLink from '../components/ButtonLink';

export default function NotFound() {
  return (
    <div className="flex h-[85vh] w-full items-center justify-center bg-not-found-gradient md:h-[90vh]">
      <div className="relative flex flex-col items-center justify-center text-center ">
        <div className="absolute z-10">
          <h1 className="pb-2 text-3xl text-accent underline">
            404. Not Found
          </h1>
          <p className="pb-4">Упппсссс... Щось пішло не так</p>
          <ButtonLink title="Перейти на головну" navigateTo="/" size="m" />
        </div>
        <div className="absolute -left-36 -top-8 md:-left-64 md:-top-24 xl:-top-28">
          <Image
            src={BrokenTractor}
            alt="Track"
            width={180}
            height={150}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
